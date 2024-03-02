"use client"

import useOrder from "@/components/hooks/useOrder";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const BarChart = () => {
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
        <Bar
            data={{
                labels: labels,
                datasets: [
                    {
                        label: "Bookings Per Day",
                        data: data,
                        borderRadius: 5,
                        color: 'white' // Set text color inside data to white
                    },

                ],
            }}
        />
    );
};

export default BarChart;