import authService from "../appwrite/auth";
// import { LogOutButton, Input } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import { Input } from ".";
// import authservice from "../appwrite/auth";

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
    // getUserSessions();
  };

  const githubLogin = async () => {
    await authService.githubLogin();
  };

  // async function getUserSessions() {
  //   console.log("this is the user sessions");
  //   const session = await authservice.getAccount();
  //   console.log(session, "this is the user sessions");
  //   console.log(session.provider, "provider");
  //   console.log(session.providerUid, "uid");
  //   console.log(session.providerAccessToken, "token part ");
  // }

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
      <div className="google_login">
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

      <div className="github_login">
        <button
          className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2 transition duration-300 transform hover:scale-105 hover:shadow-lg my-5 mx-10"
          onClick={() => githubLogin()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-gray-700 font-semibold">Login with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
