import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" text-white h-auto py-6 my-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 underline">About KlyistBlog</h1>
        <p className="text-gray-300">
          Welcome to KlyistBlog, a place where we share our thoughts, ideas, and
          stories with the world.
        </p>
        <p className="text-gray-300 mt-4">
          Our mission is to provide a platform for individuals to express
          themselves, share knowledge, and connect with like-minded people.
          Whether you're a seasoned writer or new to blogging, KlyistBlog offers
          a space for you to share your unique voice.
        </p>
        <p className="text-gray-300 mt-4">
          We believe in the power of storytelling and the impact it can have on
          our lives. Our community of bloggers covers a wide range of topics,
          from technology and science to art and travel. We encourage you to
          explore our blog posts and, if you feel inspired, to join our
          community and start sharing your own stories.
        </p>
        <p className="text-gray-300 mt-4">
          Thank you for being a part of our journey. Together, we can create a
          vibrant and diverse platform where everyone's voice is heard.
        </p>
        <Link to="/signup" className="btn btn-primary mt-4">
          Join KlyistBlog
        </Link>
      </div>
    </div>
  );
};

export default About;
