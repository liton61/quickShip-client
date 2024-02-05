import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import usePublicAxios from "../hooks/usePublicAxios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const router = useRouter();
  const axiosPublic = usePublicAxios();

  const handleGoogle = () => {
    googleLogin().then((res) => {
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: `Log In successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      const userInfo = {
        email: res.user.email,
        name: res.user.displayName,
        role: "user",
      };
      axiosPublic.post("/users", userInfo).then(() => {});
      router.push("/");
    });
  };
  return (
    <div>
      <div className="divider w-2/3 m-auto"></div>
      <div className="flex justify-center gap-10 my-6">
        <button
          onClick={handleGoogle}
          className="btn btn-circle shadow-lg border-rounded border-[#2563EB] border-[2px]"
        >
          <FaGoogle className="text-xl"></FaGoogle>
        </button>
        <button className="btn btn-circle shadow-lg border-rounded border-[#2563EB] border-[2px]">
          <FaGithub className="text-xl"></FaGithub>
        </button>
        <button className="btn btn-circle shadow-lg border-rounded border-[#2563EB] border-[2px]">
          <FaFacebookF className="text-xl "></FaFacebookF>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
