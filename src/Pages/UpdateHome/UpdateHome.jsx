/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateHome = () => {
    const {id} = useParams()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { name,address,city,bedrooms,bathrooms,roomsize,picture,availity,rent,phone,description } = useLoaderData()
    const onSubmit =async (data) => {
        const userEmail = localStorage.getItem('userEmail')
        const dataSend={...data, userEmail}
        console.log(dataSend)
        const response =await fetch(`https://home-hunting-server.vercel.app/updateHome/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataSend),
        })
          const result =await response.json()
    
          
            if (result.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Home updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
              navigate("/");
            }
          
      };


    return (
        <div>
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
                    defaultValue={name}
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
        </div>
    );
};

export default UpdateHome;