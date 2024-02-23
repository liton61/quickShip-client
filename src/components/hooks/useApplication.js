"use client"
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicAxios from "./usePublicAxios";

const useApplication = () => {
  const publicAxios = usePublicAxios();
  const { user } = useAuth();
  const { refetch, data: application = [] } = useQuery({
    queryKey: ["application", user?.email],
    queryFn: async () => {
      const res = await publicAxios.get(`/application?email=${user.email}`, {
        cache: "no-store",
      });
      return res.data;
    },
  });

  return [application, refetch];
};

export default useApplication;