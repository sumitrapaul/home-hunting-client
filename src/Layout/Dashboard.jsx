import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  let storedEmail;
  let storedRole;

  if(localStorage.getItem('userEmail')){
     storedEmail =localStorage.getItem('userEmail')
     storedRole =localStorage.getItem('userRole')
     console.log(storedEmail,storedRole)
  }

    return (
        <div className="flex gap-6">
      <div className="w-64 min-h-screen bg-gradient-to-r from-cyan-200 to bg-indigo-600">
        <ul className="menu space-y-4">
          
           {storedRole == 'House Owner' ? (
             <>
             <li className="text-[#581c87] font-bold text-2xl">
               <NavLink to="/dashboard/addHome">Add Home</NavLink>
             </li>
             <li className="text-[#581c87] font-bold text-2xl">
               <NavLink to="/dashboard/allHomes">My Home</NavLink>
             </li>
           </>
           ) : (
            <>
            <li className="text-[#581c87] font-bold text-2xl">
              <NavLink to="/dashboard/booking">My Booking</NavLink>
            </li>
          </>
           )}
         
           
        
          <div className="divider"></div>
          <li className="text-[#581c87] font-bold text-2xl">
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
    );
};

export default Dashboard;