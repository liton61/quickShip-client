"use client"

import useOrder from "@/components/hooks/useOrder";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
  const [order] = useOrder();

  const bookingsPerDay = order?.reduce((acc, item) => {
      const date = item?.deliveryDate;
      const existingEntry = acc.find((entry) => entry.date === date);

      if (existingEntry) {
          existingEntry.bookingCount += 1;
      } else {
          acc.push({
              date,
              bookingCount: 1,
          });
      }

      return acc;
  }, []);

  const labels = bookingsPerDay?.map((data) => data.date);
  const data = bookingsPerDay?.map((data) => data.bookingCount);

  return (
    <Doughnut
      data={{
        labels: ['Users', "Order", "Payment", "Return"],
        datasets: [
          {
            label: "Count",
            data: data,
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
              "rgba(353, 135, 135, 0.8)"
            ],
            borderColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
              "rgba(350, 135, 135, 0.8)"
            ],
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