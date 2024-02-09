/* eslint-disable react-hooks/rules-of-hooks */
import usePublicAxios from "./usePublicAxios";

export async function getUpdateOrder(id) {
  const axiosPublic = usePublicAxios();
  const result = await axiosPublic(`/order/${id}`);
  console.log(result);
  return result;
}
