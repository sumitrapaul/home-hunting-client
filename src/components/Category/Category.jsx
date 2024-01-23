/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Category = ({home}) => {
    const { _id,name,address,city,picture,availity } = home;
    return (
        <div>
    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-purple-600">
  <figure><img className="w-[250px]" src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Address:{address}</p>
    <p>City: {city}</p>
    <p>Availity:{availity}</p>
    <div className="card-actions justify-end">
    <Link to={`/home/${_id}`}>
    <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Details</button>
    </Link>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default Category;