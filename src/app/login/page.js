/* eslint-disable react/no-unescaped-entities */
"use client";

import { useContext } from "react";
import { AuthContext } from "../auth/page";
import Image from "next/image";
import Link from "next/link";
import google from "../../asstes/google.jpg";
import swal from "sweetalert";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.data);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const formInfo = { email, password };
    console.log(formInfo);

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        swal.fire({
          title: "Good job !",
          text: "You you have successfully login !",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="bg-base-200 flex items-center justify-center py-16">
        <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium"
              >
                Login
              </button>
            </div>
            <div className="mb-6 flex justify-center items-center">
              <Image
                onClick={handleGoogleLogin}
                className="w-16 h-16 rounded-full cursor-pointer"
                src={google}
                alt=""
              />
            </div>
          </form>
          <p className="text-gray-600 text-sm text-center mb-2">
            Forget Password
          </p>
          <p className="text-gray-600 text-sm text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
