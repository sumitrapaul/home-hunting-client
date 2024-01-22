/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AllHome from "../AllHome/AllHome";


const AllHomes = () => {
    const [homes, setHomes] = useState([]);
    const [loaded, setLoaded] = useState([]);
    
    useEffect(() => {
      const fetchJob = () => {
        fetch("http://localhost:5000/allHomes")
          .then((res) => res.json())
          .then((data) => {
            setLoaded(data);
            setHomes(data);
          });
      };
      fetchJob();
    }, []);
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
            </tr>
          </thead>
          <tbody>
            {homes.map((home, i) => (
              <AllHome key={home._id} home={home} i={i + 1}></AllHome>
            ))}
          </tbody>
        </table>
      </div> 
        </div>
    );
};

export default AllHomes;