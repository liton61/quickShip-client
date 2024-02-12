"use client"
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicAxios from "./usePublicAxios";


const useAdmin = () => {
  const { user, isLoading } = useAuth();
  console.log(user?.email);
  const publicAxios = usePublicAxios()
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await publicAxios.get(`/users/admin/${user?.email}`);
      console.log(res.data);
      return res.data.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;