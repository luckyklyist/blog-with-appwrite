import React from "react";
import service from "../appwrite/appwriteConfig";
import { useForm } from "react-hook-form";
import { Input, RTE } from "./index";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

interface Blog {
  title: string;
  description: string;
  slug: string;
}

const CreateBlog = ({ post }: { post?: Blog }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm<Blog>({
      defaultValues: {
        title: post?.title || "",
        description: post?.description || "",
        slug: post?.slug || "",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.userInfo);

  const onSubmit = async (data: Blog) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title"
          {...register("title", { required: true })}
          placeholder="Enter Title"
          type="text"
        />
        <Input
          label="Slug"
          type="text"
          {...register("slug", { required: true })}
          placeholder="Enter Slug"
        />
        <RTE
          label="Description"
          {...register("description", { required: true })}
          control={control}
          name="description"
          defaultValue="hello"
          key={"yes"}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
