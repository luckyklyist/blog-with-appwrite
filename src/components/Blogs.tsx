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
          blog_image: String(service.getFilePreview(doc.post_image)),
        };
      });
      setLoading(false);
      setBlogList(blogList);
    }
    getPosts();
  }, []);

  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="heading text-center my-5 text-3xl font-bold ">Blogs</div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogList.map((blog) => (
            <div className="card bg-gray-800 shadow-lg p-4" key={blog.id}>
              <img
                src={blog.blog_image} // Add the correct image source
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold mb-2">
                  {blog.title}
                  <span className="badge badge-primary ml-2">NEW</span>
                </h2>
                <p
                  className="text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: blog.content.slice(0, 100),
                  }}
                ></p>
                <p
                  className="text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: blog.content.length > 100 ? "..." : "",
                  }}
                ></p>
                <a href={`/blog/${blog.id}`} className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
