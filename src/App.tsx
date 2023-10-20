import "./App.css";
import authservice from "./appwrite/auth";
import Login from "./components/Login";
import SingUp from "./components/SignUp";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./features/auth/authSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import CreateBlog from "./components/CreateBlog";
import EditBlog from "./components/EditBlog";

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
      const session = await authservice.getAccount();
      console.log(session);
      console.log(userSession);
    };
    setUserSessionSet();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:blogId" element={<EditBlog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
