"use client";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useServices = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: services = [] } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await publicAxios.get(`/services`, {});
      return res.data;
    },
  });
  console.log(services);
  return [services, refetch];
};

export default useServices;
