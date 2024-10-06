import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useToken from "../../hooks/useToken";
import auth from "../../../firebase.init";
import { FaUser } from "react-icons/fa";
const SignUp = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);
  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    if (data.password === data.confirmPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      const success = await updateProfile({ displayName: data.name });
      if (success) {
        saveUserDb(data.email, data.name);
      }
    }
  };

  if (token) {
    navigate(from, { replace: true });
  }

  const saveUserDb = (email, name) => {
    const user = { email, name };
    fetch("https://e-server-eta.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          setLoginEmail(email);
          toast.success("Profile created and updated successfully");
        }
      });
  };

  return (
    
    <div className="login-body flex justify-center items-center ">
              <div className="mx-auto rounded sm:w-1 lg:w-1/3 border-2 p-10 ">
        <h2 className="text-6xl text-white mb-4">
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
            {...register("name")}
            type="text"
            name="name"
            placeholder="Name"
            className="rounded input-primary bg-white  p-1 mx-auto hover:border-lime-300
w-full border"
          />
          <input
            required
            {...register("email")}
            type="email"
            name="email"
            placeholder="Email"
            className="rounded input-primary bg-white p-1 mx-auto hover:border-lime-300
        w-full border"
          />

          <input
            required
            {...register("password")}
            type="password"
            name="password"
            placeholder="Password"
            className="rounded input-primary bg-white p-1 mx-auto hover:border-lime-300
  w-full border"
          />
          <input
            required
            {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="rounded input-primary bg-white p-1 mx-auto hover:border-lime-300
w-full border"
          />

          <input
            type="submit"
            className="rounded font-semibold w-full mx-auto px-1 p-1 btn btn-sm m-3 cursor-pointer"
          />
        </form>
        <button className="btn btn-sm w-full">Sign In With Google </button>
        <Link to="/login">
          <h2 className=" text-center text-md mt-4 mb-8 hover:capitalize ">
            <span className=" hover:border-red-500">
              Already Have An Account ? Please Login
            </span>
          </h2>
        </Link>
            </div>
        </div>
      </div>
    </div>

  );
};

export default SignUp;
