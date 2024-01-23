/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const { _id } = useParams();
  const [home, setHome] = useState(null);
  useEffect(() => {
    fetch(`https://home-hunting-server.vercel.app/homedetails/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setHome(data);
      });
  }, [_id]);

  const handleBooking = () => {
    const userEmail = localStorage.getItem("userEmail");

    fetch("https://home-hunting-server.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        houseId: _id,
        name: name,
        email: userEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Home booking successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate("/");
      });
  };

  return (
    <div>
      <div className="mt-4 lg:mt-16">
        <img
          className="w-full lg:max-w-7xl h-[700px] mx-auto mb-8"
          src={home?.picture}
          alt=""
        />
      </div>

      <div className="card card-compact bg-slate-200 glass shadow-xl w-full max-w-7xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">{home?.name}</h2>
          <div className="flex">
            <h4 className="font-bold mr-7">Bedrooms :{home?.bedrooms}</h4>
            <h4 className="font-bold">Bathrooms :{home?.bathrooms}</h4>
          </div>
          <div className="flex">
            <h4 className="font-bold mr-7">Roomsize: {home?.roomsize}</h4>
            <h4 className="font-bold">Availity: {home?.availity}</h4>
          </div>
          <div className="flex">
            <h4 className="font-bold mr-7">Rent per month: {home?.rent}</h4>
            <h4 className="font-bold">Phone: {home?.phone}</h4>
          </div>
          <p className="text-xl text-black">{home?.description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleBooking} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
