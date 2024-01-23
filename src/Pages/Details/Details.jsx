import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
const {_id} = useParams()
const [home, setHome] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/homedetails/${_id}`)
          .then((res) => res.json())
          .then((data) => {
            setHome(data);
          });
      }, [_id]);

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
        <div className="flex items-start px-4 pt-4">
          
        </div>
        <div className="card-body">
          <h2 className="card-title">{home?.title}</h2>
          <div className="flex">
            <h4 className="font-bold mr-7">Salary: {home?.salary}</h4>
            <h4 className="font-bold">Applicants: {home?.applicants}</h4>
          </div>
          <p>{home?.description}</p>
          
        </div>
      </div>
        </div>
    );
};

export default Details;