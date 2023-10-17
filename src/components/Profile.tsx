import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import service from "../appwrite/appwriteConfig";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { email, name } = useSelector(
    (state: RootState) => state.auth.userInfo
  );
  const [blogs, setBlogs] = React.useState<any[]>([]);
  React.useEffect(() => {
    async function myBlogs() {
      const fetchBlogs = await service.getPostsByUserId(email);
      console.log(fetchBlogs);
      setBlogs(fetchBlogs.documents);
    }
    myBlogs();
  }, [email]);

  async function deletePost(id: string) {
    await service.deletePosts(id);
    const fetchBlogs = await service.getPostsByUserId(email);
    setBlogs(fetchBlogs.documents);
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col items-center">
        <img
          src="https://www.bupipedream.com/wp-content/uploads/2019/09/PeteDavidsonillo-819x1024.jpg"
          alt="User Avatar"
          className="rounded-full w-32 h-32 mb-4"
        />
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="btn btn-sm mt-4 btn-primary text-sm">
          <Link to="/create">Add Posts</Link>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">{email}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <ul className="text-gray-700">
          <li>Email: john@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Website: www.johndoe.com</li>
        </ul>
      </div>
      <div className="blogs mt-8">
        <div className="text-xl my-4 mx-2 italic font-bold underline">
          Your Blogs
        </div>
        {blogs.map(
          (
            blog: { $id: string; title: string; description: string },
            index
          ) => (
            <div
              key={index}
              className="bg-slate-800 p-4 mb-4 rounded-lg relative"
            >
              <h3 className="text-xl font-semibold text-blue-500">
                <Link to={`/blog/${blog.$id}`}>{blog?.title}</Link>
              </h3>
              {/* <p className="text-gray-700">{blog?.description}</p> */}
              <div className="absolute top-0 right-0 mt-2 mr-2 space-x-2">
                <button className="text-sm bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                  <Link to={`/edit/${blog.$id}`}>Edit</Link>
                </button>
                <button
                  className="text-sm bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  onClick={() => {
                    deletePost(blog.$id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
