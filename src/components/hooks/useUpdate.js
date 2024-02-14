"use client";

import usePublicAxios from "./usePublicAxios";

const useUpdate = async (id) => {
  const axiosPublic = usePublicAxios();
  await axiosPublic.get(`/order/${id}`)
  .then(res => console.log(res.data))
};
export default useUpdate;
