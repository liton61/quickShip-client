import { AuthContext } from "@/app/auth/page";
import { useContext } from "react";

const useAuth = () => {
  const authUtils = useContext(AuthContext);
  return authUtils;
};

export default useAuth;