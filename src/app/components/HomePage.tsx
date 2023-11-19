"use client";
import { useState } from "react";
import { ThankYouPage } from "./ThankYou";

export const HomePage = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!formData.username || !formData.email) {
      alert("Name and Email are required fields.");
      return; // Prevent further execution
    }
    const res = await fetch(`/api/`, {
      method: "POST",
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      // Email sent successfully, clear the form & redirect to the thank you page.
      setFormSuccess(true);
      setFormData({ username: "", email: "" });
    } else {
      // Handle other cases (e.g., server errors) here.
      alert("We are having some error sending the email.");
    }
  };

  return (
    <section className="bg-slate-900 h-screen">
      <main className=" text-gray-50 flex flex-col items-center justify-between  p-24">
        {formSuccess && <ThankYouPage username={formData.username} />}
        <div className="">
          <h1 className="text-6xl">Welcome</h1>
          <p className="pt-4">Please provide your details to continue.</p>
        </div>

        <form className="w-full md:w-1/2 mt-20">
          <div className="mb-6 ">
            <label htmlFor="name" className="text-sm font-medium block mb-2">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Name"
              required
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-100 block mb-2"
            >
              Your Email*
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="w-full flex flex-col items-center ">
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="text-white bg-blue-700 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
            >
              Send Email
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};
