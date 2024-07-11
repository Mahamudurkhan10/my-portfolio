import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Navbar/Footer";


const Root = () => {
     return (
          <div className="max-w-7xl mx-auto ">
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Root;