import axios from "axios";
// https://quick-ship-server.vercel.app
export const instance = axios.create({
  baseURL: "https://quickship-04.vercel.app",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
