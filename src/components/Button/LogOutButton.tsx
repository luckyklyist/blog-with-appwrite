import { useDispatch } from "react-redux";
import authservice from "../../appwrite/auth";
import { logOutUser } from "../../features/auth/authSlice";

const LogOutButton = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    try {
      authservice.logoutUser().then(() => {
        dispatch(logOutUser());
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="text-yellow-500" onClick={handleLogOut}>
      LogOut
    </button>
  );
};

export default LogOutButton;
