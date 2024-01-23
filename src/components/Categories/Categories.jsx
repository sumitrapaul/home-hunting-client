/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import InfiniteScroll from "react-infinite-scroll-component";


const Categories = () => {
    const [homes, setHomes] = useState([])
    const [loaded, setLoaded] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1)

      const fetchHome = async () => {
        const response = await fetch(`http://localhost:5000/allHomes?page=${page}`)
        const data =await response.json()

        if(data.length == 0){
          setHasMore(false)
        } else{
          setHomes((prevHomes) => [...prevHomes,...data])
          setPage(page + 1)
        }
      //     .then((res) => res.json())
      //     .then((data) => {
      //       setLoaded(data);
      //       setHomes(data);
      //     });
      // };
      }

    useEffect(() =>{
      fetchHome();

      return () =>{
        setHomes([])
        setHasMore(true)
        setPage(1)
      }
    },[])
      
  

    return (
        <div className="mt-16 mb-10">
        
            <h1 className="text-3xl font-bold mb-12 text-[#7e22ce] text-center">Discover Your Dream Home</h1>
            <InfiniteScroll dataLength={homes.length} next={fetchHome} hasMore={hasMore} loader={<p>Loading...</p>}>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {homes.map((home, i) => (
              <Category key={home._id} home={home} i={i + 1}></Category>
            ))}
           </div>
           </InfiniteScroll>
        </div>
    );
};

export default Categories;