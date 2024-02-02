import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useOrder = () => {

    const publicAxios = usePublicAxios()
    const {
        data: order = [],
        refetch
    } = useQuery({
        queryKey: ["order"],
        queryFn: async () => {
            const res = await publicAxios.get("/order")
            return res.data
        }
    })

    return [order, refetch];
};

export default useOrder;