"use client"

import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const usePricing = () => {

    const publicAxios = usePublicAxios()
    const {
        data: pricing = [],
        refetch
    } = useQuery({
        queryKey: ["price"],
        queryFn: async () => {
            const res = await publicAxios.get("/price-box")
            return res.data
        }
    })

    return [pricing, refetch];
};

export default usePricing;