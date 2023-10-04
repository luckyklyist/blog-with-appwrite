import authService from "../appwrite/auth";
import { LogOutButton, Input } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();

  const getUserSession = async () => {
    const userLogin = await authService.getUserSession();
    console.log(userLogin, "this is the user sessions");
  };
  getUserSession();
  const { register, handleSubmit } = useForm<IFormInput>();

  const login = async (data: IFormInput) => {
    try {
      // TODO define the userLogin resp type
      const userLogin = await authService.loginUser(data);
      if (userLogin) {
        const userSession = await authService.getUserSession();
        let userInfo = {
          email: userSession.email,
          name: userSession.name,
        };
        console.log(userInfo);
        dispatch(loginUser({ userInfo }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <form
        onSubmit={handleSubmit(login)}
        className="rounded px-8 pt-6 pb-8 mb-4"
      >
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          className="form-input"
          {...register("email", { required: true })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5 ml-8"
          type="submit"
        >
          Login
        </button>
      </form>
      <LogOutButton />
    </div>
  );
};

export default Login;
