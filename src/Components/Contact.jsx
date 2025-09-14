import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className=" mx-auto mt-20 mb-10  md:p-8   flex flex-col md:flex-row gap-8 items-start"
    >
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="font-bold text-3xl md:text-4xl mb-2 text-gray-900">
          Stay in the loop 😉!
        </h2>
        <p className="text-gray-600 text-lg md:text-base">
          We are not live yet, enter your mail and we will notify you once we
          are live.
        </p>
      </div>
      <form
        className="flex-1 flex flex-col gap-4 justify-center w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          required
          placeholder="Your email address"
          className="border border-gray-300 rounded-md  w-full px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#6d72c3]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows={4}
          placeholder="Anything you'd like to add? "
          className="border border-gray-300 rounded-md w-full px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#6d72c3]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#6d72c3] text-white font-bold py-3 rounded-lg text-lg hover:bg-[#5a61a8] transition"
        >
          Notify Me
        </button>
        {submitted && (
          <div className="mt-2 text-green-600 text-center text-base">
            Thank you! We'll notify you once we are live.
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
