import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
     const scrollToSection = useCallback((id) => {
          const section = document.getElementById(id);
          if (section) {
               section.scrollIntoView({ behavior: 'smooth' });
          }
     }, []);

     const NavItems = <div className="text-xl lg:flex text-white gap-4">
          <Link className="hover:text-blue-600" to={'/'}><li> Home </li></Link>
          <Link className="hover:text-blue-700" onClick={() => scrollToSection('about')} ><li> About Me </li></Link>
          <Link className="hover:text-blue-600 " to={'/contactMe'}><li> Contact Me </li></Link>
     </div>
     return (
          <div className="">
               <div className="navbar fixed z-10  max-w-screen-xl  opacity-94 bg-[#191919] ">
                    <div className="navbar-start ">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   {NavItems}
                              </ul>
                         </div>

                         <button className="text-2xl text-white font-semibold "> <span className="text-info">Mahamudur</span> Khan   </button>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {NavItems}
                         </ul>
                    </div>
                    <div className="lg:navbar-end ml-7 space-x-2 lg:ml-0 ">

                         <NavLink to={'/contactMe'}>  <a className="btn btn-info btn-outline animate-pulse"> Hire Me </a></NavLink>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;