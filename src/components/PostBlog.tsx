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
  post_image: string;
}

interface CreatePosts {
  title: string;
  slug: string;
  description: string;
  post_image: string;
}

const PostBlog = ({ post }: { post?: Posts }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, control, setValue } = useForm<CreatePosts>();
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  const onSubmit = async (data: CreatePosts) => {
    if (post) {
      const image = data.post_image[0];
      if (image) {
        await service.deleteImage(post.post_image);
        // @ts-ignore
        const uploadImage = await service.uploadImage(image);
        data.post_image = uploadImage.$id;
      }
      await service
        .updatePosts(
          {
            ...data,
            userId: userInfo.email,
          },
          post.$id
        )
        .then(() => {
          navigate("/profile");
        });
    } else {
      const image = data.post_image[0];
      if (image) {
        // @ts-ignore
        const uploadImage = await service.uploadImage(image);
        data.post_image = uploadImage.$id;
      }
      await service
        .createPosts({ ...data, userId: userInfo.email })
        .then(() => {
          navigate("/profile");
        });
    }
  };
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  React.useEffect(() => {
    if (post) {
      setValue("title", post.title);
      setValue("slug", post.slug);
      setValue("description", post.description);
      setValue("post_image", post.post_image);
    }
  }, [post, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="ml-32">
        <Input
          label="Title"
          {...register("title", { required: true })}
          placeholder="Enter Title"
          type="text"
        />
        <Input
          label="Image"
          placeholder="Upload Post Image"
          type="file"
          {...register("post_image")}
          onChange={handleImageChange}
        />
        {imagePreview && (
          <img src={imagePreview} alt="Image Preview" height={200} />
        )}

        <RTE
          label="Description"
          {...register("description", { required: true })}
          control={control}
          name="description"
          defaultValue={post?.description}
        />

        <button type="submit" className="btn btn-primary my-6 mx-8">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostBlog;
