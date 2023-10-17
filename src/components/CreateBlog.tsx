import React from "react";
import service from "../appwrite/appwriteConfig";
import { useForm } from "react-hook-form";
import { Input, RTE } from "./index";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

interface Posts {
  $id: string;
  title: string;
  slug: string;
  description: string;
  post_image: File | null;
}

interface CreatePosts {
  title: string;
  slug: string;
  description: string;
  post_image: File | null;
}

const CreateBlog = ({ post }: { post?: Posts }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, control } = useForm<CreatePosts>({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      description: post?.description || "",
      post_image: post?.post_image || null,
    },
  });
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  const onSubmit = async (data: CreatePosts) => {
    if (post) {
    } else {
    }
  };

  return (
    <div>
      <div className="text-2xl mt-4 font-bold text-center">Create Blogs</div>
      <form onSubmit={handleSubmit(onSubmit)} className="ml-32">
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
        <Input
          label="Image"
          placeholder="Upload Post Image"
          type="File"
          {...register("post_image")}
        />
        <RTE
          label="Description"
          {...register("description", { required: true })}
          control={control}
          name="description"
          defaultValue="hello"
          key={"yes"}
        />

        <button type="submit" className="btn btn-primary my-6 mx-8">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
