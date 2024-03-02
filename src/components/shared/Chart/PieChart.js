"use client"

import useAllPayment from "@/components/hooks/useAllPayment";
import useParcel from "@/components/hooks/useParcel";
import useReturn from "@/components/hooks/useReturn";

import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
  const [parcel] = useParcel();
  const successParcel = parcel?.filter(item => item?.status === "success")
  const pendingParcel = parcel?.filter(item => item?.status === "pending")

  const [paymentAll] = useAllPayment()
  const [returnProduct] = useReturn()



  return (
    <Doughnut
      data={{
        labels: ['Users', "Order", "Payment", "Return", "Delivered"],
        datasets: [
          {
            label: "Count",
            data: [successParcel.length, parcel?.length, paymentAll.length, returnProduct?.length, pendingParcel?.length],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(255, 159, 64)',
              'rgba(255, 205, 86)',
              'rgba(75, 192, 192)',
              'rgba(54, 162, 235)',
            ],
            // borderColor: [
            //   "rgba(0, 0, 0, 0.8)",
            //   "rgba(0, 0, 0, 0.8)",
            //   "rgba(0, 0, 0, 0.8)",
            //   "rgba(0, 0, 0, 0.8)",
            //   "rgba(0, 0, 0, 0.8)",
            // ],
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Revenue Sources",
          },
        },
      }}
    />
  );
};

export default PieChart;