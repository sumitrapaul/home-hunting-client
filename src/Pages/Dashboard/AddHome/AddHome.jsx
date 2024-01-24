/* eslint-disable no-unused-vars */

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddHome = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleAdd = (_id) => {
      const userEmail = localStorage.getItem('userEmail')
          document.getElementById("my_modal_1").showModal();
          console.log(userEmail)
        
      };

      const onSubmit = (result) => {
        const userEmail = localStorage.getItem('userEmail')
        const dataSend={...result, userEmail}
        fetch("http://localhost:5000/addHome", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataSend),
        })
          .then((res) => res.json())
          .then((data) => {
            
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Home added successfully",
        showConfirmButton: false,
        timer: 1500
      });
            navigate("/");
          });
      };

    return (
        <div className="mt-12">
          <div className="flex justify-center items-center">
          <button
              className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
              onClick={() => handleAdd()}
            >
              Add New Home
            </button>
          </div>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    {...register("name")}
                    className="border border-purple-700 px-5 py-2 rounded"
                  />

                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Address
                  </label>

                  <input
                    type="text"
                    {...register("address")}
                    className="border border-purple-700 px-5 py-2 rounded"
                  />
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    City
                  </label>

                  <input
                    type="text"
                    {...register("city")}
                    className="border border-purple-700 px-5 py-2 rounded"
                  />

                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    BedRooms
                  </label>

                  <input
                    type="number"
                    
                    {...register("bedrooms")}
                    className="border border-purple-700 text-input px-5 py-2 rounded"
                  />

                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    BathRooms
                  </label>

                  <input
                    type="number"
                    {...register("bathrooms")}
                    className="border border-purple-700 text-input px-5 py-2 rounded"
                  />

                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Room Size
                  </label>
                  <input
                    {...register("roomsize")}
                    type="text"
                    className="border border-purple-700 px-5 py-2 rounded"
                  />
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Picture
                  </label>
                  <input
                    {...register("picture")}
                    type="text"
                    className="border border-purple-700 px-5 py-2 rounded"
                  />
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Availity Date
                  </label>
                  <input
                    {...register("availity")}
                    type="date"
                    className="border border-purple-700 px-5 py-2 rounded"
                  />
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Rent Per Month
                  </label>
                  <input
                    {...register("rent")}
                    type="text"
                    className="border border-purple-700 px-5 py-2 rounded"
                  />
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    pattern="(\+8801[1-9][0-9]{8}|01[1-9][0-9]{8})"
                    type="tel"
                    className="border border-purple-700 px-5 py-2 rounded"
                  />
                  <label
                    htmlFor=""
                    className="text-md font-semibold text-gray-800 px-1 -mb-3"
                  >
                    Description
                  </label>
                  <input
                    {...register("description")}
                    type="text"
                    className="border border-purple-700 px-5 py-2 rounded"
                  />

                  <input
                    type="submit"
                    value="Submit"
                    className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  />
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Close</button>
                  </form>
                </div>
              </div>
            </dialog> 
        </div>
    );
};

export default AddHome;