import autheService from "../appwrite/auth";
import { LogOutButton, Input } from "./index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const SingUp = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IFormInput>();

  const signUp = async (data: IFormInput) => {
    try {
      const userSignUp = await autheService.registerUser(data);
      if (userSignUp) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 ">
      <form
        onSubmit={handleSubmit(signUp)}
        className="rounded px-8 pt-6 pb-8 mb-4"
      >
        <Input
          label="Name"
          type="text"
          placeholder="Enter your Name"
          className="form-input"
          {...register("name", { required: true })}
        />
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
          SingUp
        </button>
      </form>
    </div>
  );
};

export default SingUp;
