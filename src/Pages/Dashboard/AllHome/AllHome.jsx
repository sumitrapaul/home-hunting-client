

/* eslint-disable react/prop-types */
const AllHome = ({home}) => {

    // eslint-disable-next-line no-unused-vars
    const { _id,name,address,city,bedrooms,bathrooms,roomsize,picture,availity,rent,phone,description } = home;
    return (
        <tr>
            <img className="w-16 h-12" src={picture} alt="" />
         <td>{name}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>{bedrooms}</td>
      <td>{bathrooms}</td>
      <td>{roomsize}</td>
      <td>{availity}</td>
       <td>{rent}</td>
       <td>{phone}</td>
       <td>{description}</td>
       <td><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Edit</button></td>
       <td><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Delete</button></td>
        </tr>
       
    );
};

export default AllHome;