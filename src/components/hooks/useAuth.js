import { AuthContext } from "@/app/providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
  const authUtils = useContext(AuthContext);
  return authUtils;
};

export default useAuth;
