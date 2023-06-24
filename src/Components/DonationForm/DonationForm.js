import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function DonationForm() {
  const { register, handleSubmit, reset, setValue, control } = useForm();
  const { id } = useParams();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4 text-white text-center mt-9">
          Make a Donation
        </h2>
        <h3 className=" font-semibold mb-4 text-white text-center ">
          Let's bring a change together
        </h3>
      </div>

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
            className="w-full border border-blue-900 rounded px-3 py-2"
            {...register("name")}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-blue-900 rounded px-3 py-2"
            {...register("email")}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium">
            Category of Donation
          </label>
          {/* <select
            id="category"
            className="w-full border border-blue-900 rounded px-3 py-2"
            {...register("category")}
            required
            defaultValue={id}
          >
            <option value="">Select category</option>
            <option value="mosqueComplex">Mosque Complex</option>
            <option value="zakat">Zakat</option>
            <option value="flood">Flood Appeal</option>
          </select> */}

          <Controller
            name="selectedOption"
            control={control}
            defaultValue={id}
            render={({ field }) => (
              <select
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
