import React from "react";
import service from "../appwrite/appwriteConfig";
import { useForm } from "react-hook-form";
import { Input, RTE } from "./index";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        description: post?.description || "",
        slug: post?.slug || "",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.userInfo);

  return <div></div>;
};

export default CreateBlog;
