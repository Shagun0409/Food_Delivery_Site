const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-lg text-center">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">
        Contact Us
      </h1>
      <p className="text-gray-600 mb-8">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hi —
        feel free to reach out.
      </p>

      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
