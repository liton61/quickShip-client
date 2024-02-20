"use client"
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicAxios from "./usePublicAxios";


const useDeliveryMan = () => {
    const { user, loading } = useAuth();
    const publicAxios= usePublicAxios()
    const { data: isDeliveryMan, isPending: isDeliveryManLoading } = useQuery({
      queryKey: [user?.email, "isDeliveryMan"],
      enabled: !loading,
      queryFn: async () => {
        console.log("asking or checking is delivery man", user);
        const res = await publicAxios.get(`/users/deliveryMan/${user.email}`);
        console.log(res.data);
        return res.data?.admin;
      },
    });
    return [isDeliveryMan, isDeliveryManLoading];
  };

  export default useDeliveryMan;