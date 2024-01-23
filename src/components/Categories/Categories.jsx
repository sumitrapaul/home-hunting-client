/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [homes, setHomes] = useState([]);
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    const fetchHome = async () => {
      const response = await fetch("https://home-hunting-server.vercel.app/allHomes");
      const data = await response.json();
      setHomes(data);
    };
    fetchHome();
  }, []);

  return (
    <div className="mt-16 mb-10">
      <h1 className="text-3xl font-bold mb-12 text-[#7e22ce] text-center">
        Discover Your Dream Home
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homes.map((home, i) => (
          <Category key={home._id} home={home} i={i + 1}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
