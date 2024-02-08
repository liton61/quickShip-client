"use client"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import usePublicAxios from "../hooks/usePublicAxios";
import toast from "react-hot-toast";
import { jsPDF } from "jspdf";

const CheckoutForm = ({amount,order}) => {
console.log(order);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError]= useState('')
  const [clientSecret, setClientSecret] = useState("")
  const [transactionId, setTransactionId] = useState("");
  const doc = new jsPDF();
//   const ProductAmount = parseFloat(amount)
//   console.log(ProductAmount);
  const publicAxios = usePublicAxios()
  const {user} = useAuth()

  useEffect(() => {
    publicAxios.post("/create-payment-intent", { amount }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [publicAxios, amount]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      setError("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm Error");
    }else{
        console.log(paymentIntent);
         if (paymentIntent.status === "succeeded") {
           console.log(paymentIntent.id);
           toast.success("Successfully Payment");
           setTransactionId(paymentIntent.id);

           const payment = {
            name: user?.displayName,
            email: user?.email,
            amount: amount,
            data: new Date(),
            transactionId: paymentIntent?.id,
           };
           const res = await publicAxios.post("/payment", payment);
           console.log(res.data);

           
         }
        //  doc.text('Quick Ship',100,20,null,null, "center");
        //  doc.text(`Name :${user?.displayName}`,35, 25);
        //  doc.text(`Email :${order?.email}`, 35, 35);
        //  doc.text(`Phone :${order?.phone}`, 35, 45);
        //  doc.text(`ProductPrice :${amount}`, 35, 55);
        //  doc.text(`DeliveryDate :${order?.deliveryDate}`, 35, 65);
        //  doc.text(`ProductWeight: :${order?.productWeight}`, 35, 75);
        //  doc.text(`Address :${order?.area}`, 35, 85);
        //  doc.save(`${event.name}`.pdf)
        doc.setFontSize(20);
  doc.text('Quick Ship', 105, 20, null, null, "center");
  doc.setFontSize(12);
  doc.text(`Name: ${user?.displayName}`, 20, 40);
  doc.text(`Email: ${order?.email}`, 20, 50);
  doc.text(`Phone: ${order?.phone}`, 20, 60);
  doc.text(`Product Price: ${amount}`, 20, 70);
  doc.save(`${event.name}`.pdf)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#5A47EF",
                "::placeholder": {
                  color: "#FFF",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn my-5 btn-outline w-full btn-success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-700 mt-4">{error}</p>
      <p className="text-center"> 
        {transactionId && <p className="text-green-400 mt-4">{transactionId}</p>}
      </p>
    </div>
  );
};

export default CheckoutForm