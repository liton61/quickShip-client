"use client";

import usePublicAxios from "./usePublicAxios";

const useUpdate = (id) => {
  const axiosPublic = usePublicAxios();
  const result = axiosPublic.get(`/order/${id}`);
  return result;
};
export default useUpdate;
