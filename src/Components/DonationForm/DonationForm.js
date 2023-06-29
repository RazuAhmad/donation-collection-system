import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from "typewriter-effect";

function DonationForm() {
  const { register, handleSubmit, reset, setValue, control } = useForm();
  const { id } = useParams();

  const notify = () => toast("Successfully recieved donation");

  const onSubmit = (data) => {
    const currentDate = new Date();
    data.date = currentDate.toLocaleDateString();
    data.time = currentDate.toLocaleTimeString();


    // data post from client side:::(Create operation done)
    fetch("http://localhost:5000/donators", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dataConfirmation) => {
        if (dataConfirmation.acknowledged) {
          notify();
        }
      });

    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto p-4 h-full">
        <h2 className="text-3xl font-semibold mb-4 text-white text-center mt-9">
          Make a Donation
        </h2>
        <h3 className=" font-semibold mb-4 text-white text-center ">
          <Typewriter
            options={{
              strings: ["Let's bring a change", "together"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>

      <ToastContainer />

      {/* Form starts from here */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="enter your name"
            className="w-full border border-blue-900 rounded px-3 py-2"
            {...register("name")}
            required
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="enter your email"
            className="w-full border border-blue-900 rounded px-3 py-2"
            {...register("email")}
            required
          />
        </div> */}
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium">
            Category of Donation
          </label>

          <Controller
            name="donationCategory"
            control={control}
            defaultValue={id}
            render={({ field }) => (
              <select
                required
                {...field}
                className="w-full border border-blue-900 rounded px-3 py-2"
              >
                <option value="">Select category</option>
                <option value="mosqueComplex">Mosque Complex</option>
                <option value="zakat">Zakat</option>
                <option value="flood">Flood Appeal</option>
              </select>
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2 font-medium">
            Donation Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="enter your amount"
            className="w-full border border-blue-900 rounded px-3 py-2"
            {...register("amount")}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded px-4 py-2 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600"
        >
          Donate
        </button>
      </form>
    </>
  );
}

export default DonationForm;
