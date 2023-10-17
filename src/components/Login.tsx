import authService from "../appwrite/auth";
import { LogOutButton, Input } from "./index";
import { FormState, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserSession = async () => {
    const userLogin = await authService.getUserSession();
    console.log(userLogin, "this is the user sessions");
  };
  getUserSession();
  const { register, handleSubmit } = useForm<IFormInput>();

  const googleLogin = async () => {
    await authService.googleLogin();
  };

  const login = async (data: IFormInput) => {
    try {
      const userLogin = await authService.loginUser(data);
      if (userLogin) {
        const userSession = await authService.getUserSession();
        let userInfo = {
          email: userSession.email,
          name: userSession.name,
        };
        console.log(userInfo);
        dispatch(loginUser({ userInfo }));
        navigate("/");
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
      <div>
        <button
          className="bg-slate-900 p-4 rounded-lg shadow-md flex items-center space-x-2 transition duration-300 transform hover:scale-105 hover:shadow-lg my-5 mx-10"
          onClick={() => googleLogin()}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-6 h-6"
          />
          <span className="text-gray-700 font-semibold">Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
