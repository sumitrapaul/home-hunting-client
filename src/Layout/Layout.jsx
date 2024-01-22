import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";


const Layout = () => {
    return (
        <div>
           <Home/> 
           <Outlet/>
        </div>
    );
};

export default Layout;