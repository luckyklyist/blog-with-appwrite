const Contact = () => {
  return (
    <div className="bg-gray-900 text-white  py-6 mt-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 underline my-5">
          Contact KlyistBlog
        </h1>
        <p className="text-gray-300">
          Have questions, suggestions, or just want to get in touch with us?
          We'd love to hear from you!
        </p>
        <p className="text-gray-300 mt-4">
          Feel free to reach out to us via the contact form or by using our
          email address. We'll do our best to respond to your inquiries as
          quickly as possible.
        </p>
        <p className="text-gray-300 mt-4">Email: contact@klyistblog.com</p>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              className="textarea textarea-bordered w-full"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
