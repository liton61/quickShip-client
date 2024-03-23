import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useReturn = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: returnProduct = [] } = useQuery({
    queryKey: ["returnProduct"],
    queryFn: async () => {
      const res = await publicAxios.get(`/return`, {
      });
      return res.data;
    },
  });

  return [returnProduct, refetch];
};

export default useReturn;
