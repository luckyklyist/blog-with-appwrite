import React from "react";
import autheService from "../appwrite/auth";
import { LogOutButton, Input } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<IFormInput>();

  const login = async (data: IFormInput) => {
    try {
      console.log(data.email);
      console.log(data.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          className="form-control"
          {...register("email", { required: true })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        <button type="submit">Login</button>
      </form>
      <LogOutButton />
    </div>
  );
};

export default Login;
