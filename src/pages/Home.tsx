import React from "react";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://images3.alphacoders.com/133/1331008.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello, World</h1>
          <p className="mb-5">
            Appwrite Blog created by <a href="">Klyist</a>
          </p>
          <button className="btn btn-active btn-secondary">Read blogs</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
