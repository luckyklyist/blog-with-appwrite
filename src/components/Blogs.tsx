import { useEffect, useState } from "react";
import service from "../appwrite/appwriteConfig";

interface Blog {
  id: string;
  title: string;
  content: string;
  blog_image: string;
}

const Blogs = () => {
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getPosts() {
      const documentList = await service.getPosts();
      const blogList = documentList.documents.map((doc) => {
        return {
          id: doc["$id"],
          title: doc.title,
          content: doc.description,
          blog_image: doc.post_image,
        };
      });
      setLoading(false);
      setBlogList(blogList);
    }
    getPosts();
  }, []);

  return (
    <div>
      {blogList.map((blog) => {
        return (
          <div
            className="card w-96 bg-base-300 shadow-xl mx-10 p-4"
            key={blog.id}
          >
            <figure>
              <img src="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {blog.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                {blog.content.slice(0, 15)}
                {blog.content.length > 15 ? "..." : ""}
                <a
                  href={`/blog/${blog.id}`}
                  className="btn btn-sm btn-primary mx-2"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
