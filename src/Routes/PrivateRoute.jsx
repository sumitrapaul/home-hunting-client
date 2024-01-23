/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
let loading;
let storedEmail;
if(localStorage.getItem('userEmail')){
   storedEmail =localStorage.getItem('userEmail')
   
}
const location = useLocation();

if (loading) {
  return <progress className="progress w-56"></progress>;
}

if (storedEmail) {
  return children;
}
return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};


export default PrivateRoute;