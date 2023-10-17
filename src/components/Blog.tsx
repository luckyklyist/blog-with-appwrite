import React from "react";
import service from "../appwrite/appwriteConfig";
import { useParams } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  content: string;
}

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = React.useState<Blog>();
  React.useEffect(() => {
    async function getBlog() {
      const documentList = await service.getPostId(String(id));
      const blog = {
        id: documentList["$id"],
        title: documentList.title,
        content: documentList.description,
      };
      setBlog(blog);
    }
    getBlog();
  }, []);
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-3xl mx-auto py-12">
        {blog ? (
          <div>
            <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              id="description"
            ></div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
