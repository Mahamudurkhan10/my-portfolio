import { LiaLinkedinIn } from "react-icons/lia";
import { IoIosLink } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()


const Footer = () => {
     return (
          <div>
               <footer data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="px-4 divide-y dark:bg-[#191919] dark:text-white">
                    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                         <div className="lg:w-1/3">
                              <a rel="noopener noreferrer" href="/" className="flex justify-center space-x-3 lg:justify-start">
                                   <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                                        <img className="rounded-full h-12" src="https://i.ibb.co/tx46hq6/Whats-App-Image-2024-05-02-at-16-04-23-134d2b24-fotor-bg-remover-20240630203722.png" alt="" />
                                   </div>
                                   <span className="self-center text-2xl font-semibold"> Mahamudur Khan </span>
                              </a>
                         </div>
                         <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                              <div className="space-y-3">
                                   <h3 className="tracking-wide uppercase dark:text-gray-100">Product</h3>
                                   <ul className="space-y-1">
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Features</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Integrations</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Pricing</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">FAQ</a>
                                        </li>
                                   </ul>
                              </div>
                              <div className="space-y-3">
                                   <h3 className="tracking-wide uppercase dark:text-gray-100">Company</h3>
                                   <ul className="space-y-1">
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Privacy</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                        </li>
                                   </ul>
                              </div>
                              <div className="space-y-3">
                                   <h3 className="uppercase dark:text-gray-100">Developers</h3>
                                   <ul className="space-y-1">
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Public API</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Documentation</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Guides</a>
                                        </li>
                                   </ul>
                              </div>
                              <div className="space-y-3">
                                   <div className="uppercase dark:text-gray-100">Social media</div>
                                   <div className="flex justify-start space-x-3">
                                        <a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100092176940963" title="Facebook" className="flex items-center p-1">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                             </svg>
                                        </a>

                                        <button>
                                             <a href="https://www.linkedin.com/in/mahamudur-khan/"> <LiaLinkedinIn className="text-3xl"></LiaLinkedinIn> </a>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="py-6 text-sm text-center dark:text-gray-100">© 1968 Company Co. All rights reserved.</div>
               </footer>
          </div>
     );
};

export default Footer;