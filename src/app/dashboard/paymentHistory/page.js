"use client"
import usePayment from "@/components/hooks/usePayment";
import SectionTitle from "@/components/shared/SectionTitle";

const PaymentHistory = () => {
    const [payment] = usePayment()
    // console.log(payment);
  return (
    <div>
      <div className="py-8 px-5 ">
        <SectionTitle
          header={"Payment history"}
          miniHeader={"All Payment history here"}
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-black bg-gray-300">
                  <th>No</th>
                  <th>User name</th>
                  <th>User email</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Transaction Id</th>
                </tr>
              </thead>
              <tbody>
                {payment?.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>${item?.amount}</td>
                    <td>{item?.data}</td>
                    <td>{item?.transactionId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;