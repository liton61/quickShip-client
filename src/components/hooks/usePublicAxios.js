"use client";

import axios from "axios";
// https://quick-ship-server.vercel.app
export const instance = axios.create({
  baseURL: "https://quick-ship-server-one.vercel.app",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
