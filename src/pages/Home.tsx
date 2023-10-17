import arch from "../assets/arch.png";
import Blogs from "../components/Blogs";
import About from "../components/About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${arch})` }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content flex flex-col justify-center items-center text-neutral-content">
          <div className="mt-20">
            <h1 className="mb-5 text-5xl font-bold">Hello, there</h1>
            <p className="mb-5">
              Welcome to KlyistBlog, a place where you can share your thoughts
              and ideas with the world.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="blogs">
        <Blogs />
      </div>
      <About />
      <Contact />
    </div>
  );
};

export default Home;
