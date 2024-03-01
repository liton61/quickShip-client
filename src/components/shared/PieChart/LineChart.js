"use client"
import useOrder from "@/components/hooks/useOrder";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";


const LineChart = () => {

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
        <Line
            data={{
                labels: labels,
                datasets: [
                    {
                        label: "Revenue",
                        data: data,
                        backgroundColor: "#064FF0",
                        borderColor: "#064FF0",
                    },
                    // {
                    //     label: "Cost",
                    //     data: revenueData.map((data) => data.cost),
                    //     backgroundColor: "#FF3030",
                    //     borderColor: "#FF3030",
                    // },
                ],
            }}
            options={{
                elements: {
                    line: {
                        tension: 0.5,
                    },
                },
                plugins: {
                    title: {
                        text: "Monthly Revenue & Cost",
                    },
                },
            }}
        />
    );
};

export default LineChart;