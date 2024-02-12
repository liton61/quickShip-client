"use client"
import {
    useQuery
} from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useCalculator = () => {

    const publicAxios = usePublicAxios()
    const {
        data: calculators = [],
        refetch
    } = useQuery({
        queryKey: ["calculator"],
        queryFn: async () => {
            const res = await publicAxios.get("/calculator")
            return res.data
        }
    })

    return [calculators, refetch];
};

export default useCalculator;