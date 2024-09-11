
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init()

const ContactMe = () => {
     return (
          <div id='contactMe' className="pt-[70px] mb-9">
               <section className="min-h-screen  ">
                    <div className='text-center'>
                         <h1 className='text-4xl animate-pulse hover:animate-none font-semibold btn rounded-full bg-gray-400 text-blue-600 hover:text-white hover:bg-blue-600'> Contact Me  </h1>
                    </div>
                    <div className="container px-6 py-10 mx-auto">
                         <div className="lg:flex lg:items-center lg:-mx-10">
                              <div className="lg:w-1/2 lg:mx-10">
                                   <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Let’s talk</h1>

                                   <p className="mt-4 text-gray-500 dark:text-gray-400">
                                        Ask us everything and we would love to hear from you
                                   </p>

                                   <form className="mt-12">
                                        <div className="-mx-2 md:items-center md:flex">
                                             <div className="flex-1 px-2">
                                                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                                  <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                             </div>

                                             <div className="flex-1 px-2 mt-4 md:mt-0">
                                                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                                  <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                             </div>
                                        </div>

                                        <div className="w-full mt-4">
                                             <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                             <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                        </div>

                                        <button className="btn w-full mt-4 btn-info btn-outline">
                                             get in touch
                                        </button>
                                   </form>
                              </div>

                              <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                                   <img className="hidden object-cover animate-pulse mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="https://i.ibb.co/tx46hq6/Whats-App-Image-2024-05-02-at-16-04-23-134d2b24-fotor-bg-remover-20240630203722.png" alt="" />

                                   <div className="mt-6 space-y-8 md:mt-8">
                                        <p className="flex items-start -mx-2">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                             </svg>

                                             <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                                  Dhaka ,Bangladesh
                                             </span>
                                        </p>

                                        <p className="flex items-start -mx-2">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                             </svg>

                                             <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">01887169238</span>
                                        </p>

                                        <p className="flex items-start -mx-2">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                             </svg>

                                             <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Mahamudurkhan10@gmail.com</span>
                                        </p>
                                   </div>

                                   <div className="mt-6 w-80 md:mt-8">
                                        <h3 className="text-gray-600 dark:text-gray-300 uppercase font-semibold">connect with me</h3>

                                        <div className="flex mt-4 -mx-1.5">
                                             <div className='flex gap-4'>
                                                  <Link to={'https://github.com/Mahamudurkhan10'}><img align="left" alt="Github" width="30px " src="https://i.ibb.co.com/CnNr3W6/Type-Github.png" className="padding-right:10px; bg-white rounded-full" /></Link>
                                                  <Link to={'https://www.linkedin.com/in/mahamudur-khan/'}><img align="left" alt="Github" width="30px " src="https://e7.pngegg.com/pngimages/602/665/png-clipart-linkedin-linkedin-thumbnail.png" className="padding-right:10px; bg-white rounded-full" /></Link>
                                                  <Link to={'https://whatsapp.com/dl/'}><img align="left" alt="Github" width="30px " src="https://static.vecteezy.com/system/resources/previews/023/986/631/non_2x/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png" className="padding-right:10px; bg-white rounded-full" /></Link>
                                                  <Link to={'https://www.facebook.com/people/Mahamudur-Khan/100092176940963/'}><img align="left" alt="Github" width="50px " src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png" className="padding-right:10px; bg-white rounded-full" /></Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

          </div>
     );
};

export default ContactMe;