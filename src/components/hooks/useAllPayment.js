"use client"

import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useAllPayment = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: paymentAll = [] } = useQuery({
    queryKey: ["paymentAll"],
    queryFn: async () => {
      const res = await publicAxios.get(`/payment`);
      return res.data;
    },
  });

  return [paymentAll, refetch];
};

export default useAllPayment;
