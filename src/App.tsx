import "./App.css";
import authservice from "./appwrite/auth";
import Login from "./components/Login";
import RTE from "./components/RTE";
import SingUp from "./components/SignUp";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./features/auth/authSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

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
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
