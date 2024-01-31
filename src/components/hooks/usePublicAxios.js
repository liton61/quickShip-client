import axios from "axios";

export const instance = axios.create({
    baseURL: "https://quick-ship-server.vercel.app/",
});

const usePublicAxios = () => {
    return instance;
};

export default usePublicAxios;