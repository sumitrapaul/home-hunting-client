/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AllHome from "../AllHome/AllHome";
import Swal from "sweetalert2";

const AllHomes = () => {
  const [homes, setHomes] = useState([]);
  const [loaded, setLoaded] = useState([]);
  const userEmail = localStorage.getItem("userEmail");
  
  useEffect(() => {
    const fetchHome = () => {
      fetch("https://home-hunting-server.vercel.app/allHomes", {
        headers: {
          Authorization: `Bearer ${userEmail}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLoaded(data);
          setHomes(data);
        });
    };
    fetchHome();
  }, [userEmail]);


    const handleDelete = (_id) => {
    
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://home-hunting-server.vercel.app/deleteHome/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log(data)
                if (data.deletedCount > 0) {
                  Swal.fire("Your Home info has been deleted.", "success");
    
                  const remaining = homes.filter((h) => h._id !== _id);
                  setHomes(remaining);
                }
              });
          }
        });
      };

  return (
    <div>
      <div className="overflow-x-auto mt-8">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Bedroom</th>
              <th>Bathroom</th>
              <th>Roomsize</th>
              <th>Availity</th>
              <th>Rent</th>
              <th>Phone</th>
              <th>Description</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {homes
              .filter((home) => home.userEmail === userEmail)
              .map((home, i) => (
                <AllHome key={home._id} home={home} i={i + 1} handleDelete={handleDelete}></AllHome>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllHomes;
