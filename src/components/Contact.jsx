import React from "react";
import { useForm } from "react-hook-form";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.success) {
      alert("Message successfully Send !");
    } else {
      alert("Error: " + result.message);
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="container px-4 mx-auto my-16 max-w-screen-2xl md:px-20"
      >
        <h1 className="mb-4 text-3xl font-bold">Contact me</h1>
        <span>Please fill out the form below to contact me </span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="px-8 py-6 bg-slate-200 w-96 rounded-xl"
          >
            {/*access_key*/}
            <input
              type="hidden"
              value="90260dba-7059-484b-a03a-40fdcd3b947c"
              {...register("access_key")}
            />

            <h1 className="mb-4 text-xl font-semibold">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="px-3 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your Full name"
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="px-3 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="px-3 py-2 leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                placeholder="Type your message here"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="px-3 py-2 text-white duration-300 bg-black rounded-xl hover:bg-slate-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
