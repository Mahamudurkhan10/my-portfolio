import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
     const [theme, setTheme] = useState('light')
     useEffect(() => {
          localStorage.setItem('theme', theme)
          const localTheme = localStorage.getItem('theme')
          document.querySelector('html').setAttribute('data-theme', localTheme)
     }, [theme])


     const handleToggle = (e) => {
          if (e.target.checked) {
               setTheme('dark')
          }
          else {
               setTheme('light')
          }
     }
     const NavItems = <div className="text-xl lg:flex">
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-info' : 'font-semibold '} to={'/'}> <li><a> Home</a></li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-info' : 'font-semibold '} to={'/aboutMe'}> <li><a> About Me</a></li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-info' : 'font-semibold '} to={'/contactMe'}> <li><a> Contact Me </a></li></NavLink>

     </div>
     return (
          <div className="">
               <div className="navbar fixed z-10  max-w-screen-xl  opacity-94 bg-base-100">
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

                         <button className="text-xl flex lg:flex-row gap-3 flex-col items-center"> <a href="https://i.ibb.co/tx46hq6/Whats-App-Image-2024-05-02-at-16-04-23-134d2b24-fotor-bg-remover-20240630203722.png"><img className="rounded-full h-12 " src="https://i.ibb.co/tx46hq6/Whats-App-Image-2024-05-02-at-16-04-23-134d2b24-fotor-bg-remover-20240630203722.png" alt="" /></a> <NavLink to={'/'} className={'text-xl font-bold text-yellow-800'}> <span className="text-xl font-bold text-blue-800">Mahamudur</span> Khan</NavLink>   </button>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {NavItems}
                         </ul>
                    </div>
                    <div className="lg:navbar-end ml-7 space-x-2 lg:ml-0 ">
                         <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                         <NavLink to={'/contactMe'}>  <a className="btn btn-info btn-outline"> Hire Me </a></NavLink>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;