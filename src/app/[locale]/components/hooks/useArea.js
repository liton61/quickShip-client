import {
    useQuery
} from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useArea = () => {

    const publicAxios = usePublicAxios()
    const {
        data: areas = [],
        refetch
    } = useQuery({
        queryKey: ["area"],
        queryFn: async () => {
            const res = await publicAxios.get("/area")
            return res.data
        }
    })

    return [areas, refetch];
};

export default useArea;