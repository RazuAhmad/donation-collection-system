import React, { useContext } from 'react';
import "./VolunteerRegistration.css"
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../AllContexts/UserContext';

const VolunteerRegistration = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {user}=useContext(AuthContext);

  const onSubmit = (data) => {

    // data post from client side:::(Create operation done)
    fetch("http://localhost:5000/volunteers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dataConfirmation) => {
        if (dataConfirmation.acknowledged) {
          alert("Your donation has been Successful");
          reset()
        }
      });

    console.log(data); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen volunteer-bg-color">
      <div className="bg-white rounded shadow-md p-8 w-full sm:max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Volunteer Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`border border-gray-300 rounded w-full py-2 px-3 ${errors.name ? 'border-red-500' : ''}`}
              {...register('name', { required: true })}
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">Name is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              className={`border border-gray-300 rounded w-full py-2 px-3 ${errors.email ? 'border-red-500' : ''}`}
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                Email is required and should be in the format "name@example.com"
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className={`border border-gray-300 rounded w-full py-2 px-3 ${errors.phone ? 'border-red-500' : ''}`}
              {...register('phone', { required: true,
                pattern: /^[0-9()+-]*$/
            })}
            />
            {errors.phone && <span className="text-red-500 text-sm mt-1">Phone Number is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className={`border border-gray-300 rounded w-full py-2 px-3 ${errors.message ? 'border-red-500' : ''}`}
              {...register('message', { required: true })}
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm mt-1">Message is required</span>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerRegistration;
