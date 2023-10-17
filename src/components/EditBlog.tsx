import React from "react";
import PostBlog from "./PostBlog";
import { useParams } from "react-router-dom";
import service from "../appwrite/appwriteConfig";

const EditBlog = () => {
  const { blogId } = useParams();
  const [editBlog, setEditBlog] = React.useState<any>([]);

  React.useEffect(() => {
    async function getBlog() {
      const blog = await service.getPostId(String(blogId));
      setEditBlog(blog);
    }
    getBlog();
  }, [blogId]);

  console.log(editBlog, "this is edit blog");

  return (
    <div>
      <div className="text-2xl mt-4 font-bold text-center">Edit Blogs</div>
      <PostBlog post={editBlog} />
    </div>
  );
};

export default EditBlog;
