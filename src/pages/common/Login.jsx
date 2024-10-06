import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import useToken from "../../hooks/useToken";
import "../css/Login.css";
import { toast } from "react-hot-toast";
import auth from "../../../firebase.init";


const Login = () => {
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);

  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    setLoginEmail(data.email);
  };

  if (token) {
    toast.success("user logged in successfully");
    navigate("/");
  }

  return (
    <div className="login-body flex justify-center items-center ">
      <div className="mx-auto rounded sm:w-1 lg:w-1/3 border-2 p-10 ">
        <h2 className="text-6xl text-white mb-4 ">
          <FaUser className="mx-auto border-2 rounded-full p-2" />
        </h2>
        <div>
          <div>

          </div>

          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4 place-content-center "
            >
              <input
                required
                {...register("email")}
                type="email"
                name="email"
                placeholder="Email"
                className="rounded input-info bg-white p-1 mx-auto hover:border-lime-300
            w-full border"
              />

              <input
                required
                {...register("password")}
                type="password"
                name="password"
                placeholder="Password"
                className="rounded input-info bg-white p-1 mx-auto hover:border-lime-300
      w-full border"
              />

              <input
                type="submit"
                className="rounded font-semibold w-full mx-auto px-1 p-1 btn btn-sm m-3 cursor-pointer"
              />
            </form>
            <button className="btn btn-sm w-full">Sign In With Google </button>
            {error && (
              <h1 className="text-white text-center text-sm border-2 border-red-800 rounded p-1 m-3 bg-red-800">
                {error}
              </h1>
            )}
            <Link to="/signup">
              <h2 className=" text-center text-md mt-4 mb-8 hover:capitalize ">
                <span className=" hover:border-red-500">
                  Not An Account? Sign Up
                </span>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
