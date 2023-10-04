import "./App.css";
import authservice from "./appwrite/auth";
import Login from "./components/Login";
import RTE from "./components/RTE";
import SingUp from "./components/SignUp";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./features/auth/authSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const { email, name } = useSelector(
    (state: RootState) => state.auth.userInfo
  );

  React.useEffect(() => {
    const setUserSessionSet = async () => {
      const userSession = await authservice.getUserSession();
      if (userSession) {
        let userInfo = {
          email: userSession.email,
          name: userSession.name,
        };
        dispatch(loginUser({ userInfo }));
      }
    };
    setUserSessionSet();
  }, []);
  return (
    <div>
      <div className="p-6">
        <h1 className="text-xl font-bold">Welcome to Appwrite</h1>
        <h1 className="text-xl font-bold">{email}</h1>
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      {/* <RTE /> */}
      <Login />
      <SingUp />
    </div>
  );
}

export default App;
