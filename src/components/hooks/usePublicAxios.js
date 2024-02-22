"use client";

import axios from "axios";
// https://quick-ship-server-one.vercel.app
export const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
