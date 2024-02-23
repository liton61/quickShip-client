"use client"

import { useQuery } from "@tanstack/react-query";
import BarChart from "./BarChart";
import usePublicAxios from "@/components/hooks/usePublicAxios";

const Statistics = () => {
    const publicAxios = usePublicAxios()

    const { data: items = [] } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
          const res = await publicAxios.get(`/order`);
          return res.data;
        },
      });



    const bookingsPerDay = items?.reduce((acc, item) => {
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

    return (
        <div className="flex justify-center items-center w-full md:w-2/4 2xl:w-1/2 lg:shadow-xl">
            <div>
                <BarChart data={bookingsPerDay} />
            </div>
        </div>
    );
};

export default Statistics;
