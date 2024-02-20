"use client"
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useParcel = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: parcel = [] } = useQuery({
    queryKey: ["parcel"],
    queryFn: async () => {
      const res = await publicAxios.get(`/order`, {
      });
      return res.data;
    },
  });

  return [parcel, refetch];
};

export default useParcel;
