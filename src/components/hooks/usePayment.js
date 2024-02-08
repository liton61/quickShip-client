import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";
import useAuth from "./useAuth";

const usePayment = () => {
  const publicAxios = usePublicAxios();
  const { user } = useAuth();
  const { refetch, data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await publicAxios.get(`/payment?email=${user.email}`);
    //   console.log(res.data);
      return res.data;
    },
  });

  return [payment, refetch];
};

export default usePayment;
