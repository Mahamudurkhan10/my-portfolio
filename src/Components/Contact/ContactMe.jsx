import { IoLocateOutline } from "react-icons/io5";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const ContactMe = () => {
     return (
          <div className="pt-[100px] mb-9">
               <section       data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="py-6  dark:bg-gray-400 dark:text-gray-900">
                    <div className="   px-6 text-center  lg:px-8">
                         <div className="py-6 md:py-0 md:px-6">
                              <h1 className="text-6xl text-blue-700 font-extrabold">Get in touch</h1>
                              <h1 className="pt-2 text-3xl  font-bold pb-4"> You can contact with me by this --- </h1>
                              <div className="divider"></div>
                              <h1 className=" uppercase text-xl mb-4  font-extrabold bg-yellow-600 lg:rounded-full rounded-2xl lg:w-1/3 mx-auto text-white"> contact Info : </h1>
                             
                              <div className="">
                                    
                                   <h1 className="flex text-lg justify-center font-semibold text-orange-600"> <span className="text-2xl text-green-900 "><MdLocationPin /></span> Tangail,Dhaka, 
                                   Bangladesh </h1>
                                   <h1 className="flex text-lg justify-center items-center  gap-1 font-bold text-gray-900"> <img className="size-5" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/whatsapp-6426728-5361161.png?f=webp" alt="" />  01887169238 </h1>
                                   <h1 className="flex text-xl justify-center underline items-center gap-4 font-bold text-yellow-900"> 
                                         <span className="text-2xl text-red-50 "><MdMail /></span> mahamudurkhan10@gmail.com  </h1>
                                 
                                   
                              </div>
                              <div className="divider"></div>
                                   <h1 className="text-2xl w-1/2 mx-auto  mt-6 font-bold text-white rounded-2xl lg:rounded-full bg-yellow-600"> Connect With Social </h1>
                              <div className="flex gap-7 justify-center mt-7">
                                  <button>
                                   <a href="https://www.facebook.com/profile.php?id=100092176940963"> <img className="size-12" src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" /> </a>
                                  </button>
                                  <button>
                                   <a href="https://mail.google.com/mail/u/0/#sent?compose=new"> <img className="size-12" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gmail-6876244-5640842.png" alt="" /> </a>
                                  </button>
                                  <button>
                                   <a href="https://call.whatsapp.com/voice/Q16ZsoO5rgfPvpRnmabVAx"> <img className="size-12" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/whatsapp-6426728-5361161.png?f=webp" alt="" /> </a>
                                  </button>
                                 
                                  <button>
                                   <a href="https://www.linkedin.com/in/mahamudur-khan/"> <img className="size-12" src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584840.jpg" alt="" /> </a>
                                  </button>
                              </div>
                         </div>
                         
                    </div>
               </section>
          </div>
     );
};

export default ContactMe;