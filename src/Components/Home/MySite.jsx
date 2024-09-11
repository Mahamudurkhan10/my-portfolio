import { BiRightArrow } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const MySite = () => {
     return (
          <div className="mt-6">
               <section>
                    <div className="text-center ">
                    <h1 className="uppercase font-bold text-2xl lg:text-4xl  text-center text-blue-800 animate-pulse hover:bg-blue-700 hover:text-white btn rounded-full"> My Project 
                    </h1>
                    </div>

                    <p className=" w-2/3 text-[16px] font-semibold mt-2 text-center text-gray-300 py-3 mx-auto">Welcome to my portfolio, where creativity meets functionality. Explore my projects, skills, and experiences in web development and design. Each project reflects my dedication to excellence and innovation. Discover how my expertise can bring your digital vision to life.</p>

               </section>
               <section  className="grid gap-5  lg:grid-cols-2 grid-cols-1">
                    <div data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="bg-gray-50 p-5 rounded-2xl">
                         <a className="  rounded-lg   p-4 shadow-sm shadow-indigo-100">
                              <img
                                   alt=""
                                   src="https://i.ibb.co/p1qJ51v/Screenshot-16.png"
                                   className=" size-[380px] w-full rounded-md object-cover"
                              />

                              <div className="mt-2">
                                   <dl>


                                        <div>


                                             <dd className="font-bold text-xl"> Survey Sense  </dd>
                                        </div>
                                        <p className="text-xs">
                                             Explore Survey Sense and revolutionize how you gather feedback and insights. Our platform offers a user-friendly interface for creating customized surveys, making it easy to engage your audience and collect valuable data. With Survey Sense, you can design surveys that align with your specific goals, whether for market research, employee satisfaction, or customer feedback. Leverage advanced analytics and real-time reporting to understand trends and make informed decisions quickly.
                                        </p>
                                   </dl>
                                   <div className="divider"></div>
                                   <h1 className=" font-bold text-lg"> Techs I Used  </h1>
                                   <div className="flex gap-3 mt-3">
                                        <img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="MongoDB" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="padding-right:10px;" />
                                        
                                        <img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" className="padding-right:10px;" />

                                   </div>

                                   <div className="divider">  </div>

                                   <button className="btn btn-info text-white "> <a href="https://survey-sense.web.app/" className="flex items-center gap-1">  <IoIosLink /> Live Site </a> </button>
                                   <button className="btn btn-secondary text-white ml-6 "> <a href="https://github.com/Mahamudurkhan10/survey-sense-client" className="flex items-center gap-1">  < BsGithub /> code site </a> </button>
                              </div>

                         </a>
                    </div>
                    <div data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="bg-gray-50 p-5 rounded-2xl">
                         <a className="  rounded-lg   p-4 shadow-sm shadow-indigo-100">
                              <img
                                   alt=""
                                   src="https://i.ibb.co/1dfzTBh/Screenshot-17.png"
                                   className=" size-[380px] w-full rounded-md object-cover"
                              />

                              <div className="mt-2">
                                   <dl>


                                        <div>


                                             <dd className="font-bold text-xl"> Food Sharing </dd>
                                        </div>
                                        <p className="text-xs">Welcome to Food Sharing, the platform that brings communities together through the joy of sharing food. Whether you have surplus groceries, prepared meals, or simply want to help reduce food waste, Food Sharing makes it easy to connect with others in your area. Discover local food-sharing events, find or offer food donations, and make a positive impact on your community. Join us in creating a more sustainable and connected world, one shared meal at a time.</p>

                                   </dl>
                                   <div className="divider"></div>
                                   <h1 className=" font-bold text-lg"> Techs I Used  </h1>
                                   <div className="flex gap-3 mt-3">
                                        <img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="MongoDB" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="padding-right:10px;" />
                                        
                                        <img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" className="padding-right:10px;" />

                                   </div>

                                   <div className="divider">  </div>

                                   <button className="btn btn-info text-white "> <a href="https://food-sharing-client-d4349.web.app/" className="flex items-center gap-1">  <IoIosLink /> Live Site </a> </button>
                                   <button className="btn btn-secondary text-white ml-6 "> <a href="https://github.com/Mahamudurkhan10/food-share-client" className="flex items-center gap-1">  < BsGithub /> code site </a> </button>
                              </div>

                         </a>
                    </div>
                    <div data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="bg-gray-50 p-5 rounded-2xl">
                         <a className="  rounded-lg   p-4 shadow-sm shadow-indigo-100">
                              <img
                                   alt=""
                                   src="https://i.ibb.co/5k25N6M/Screenshot-18.png"
                                   className=" size-[380px] w-full rounded-md object-cover"
                              />

                              <div className="mt-2">
                                   <dl>


                                        <div>


                                             <dd className="font-bold text-xl"> Art & Crafts Store  </dd>
                                        </div>
                                        <p className="text-xs">
                                        Welcome to Crafty Creations, your one-stop destination for all things art and craft! Whether you're a seasoned artist or a DIY enthusiast, our store offers an extensive range of supplies to ignite your creativity. From high-quality paints and brushes to unique crafting materials and tools, we cater to every project and skill level. Explore our curated collection of premium products designed to inspire and elevate your artistic .
                                        </p>
                                   </dl>
                                   <div className="divider"></div>
                                   <h1 className=" font-bold text-lg"> Techs I Used  </h1>
                                   <div className="flex gap-3 mt-3">
                                        <img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="MongoDB" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="padding-right:10px;" />
                                        <img align="left" alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="padding-right:10px;" />
                                        
                                        <img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" className="padding-right:10px;" />

                                   </div>

                                   <div className="divider">  </div>

                                   <button className="btn btn-info text-white "> <a href="https://art-craft-store-2b218.web.app/" className="flex items-center gap-1">  <IoIosLink /> Live Site </a> </button>
                                   <button className="btn btn-secondary text-white ml-6 "> <a href="https://github.com/Mahamudurkhan10/Art-Craft-Store-client" className="flex items-center gap-1">  < BsGithub /> code site </a> </button>
                              </div>

                         </a>
                    </div>
                    <div data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="bg-gray-50 p-5 rounded-2xl">
                         <a className="   rounded-lg   p-4 shadow-sm shadow-indigo-100">
                              <img
                                   alt=""
                                   src="https://up2client.com/envato/biogi/assets/images/coming-soon.jpg"
                                   className=" size-[380px] mt-11 w-full rounded-md object-cover"
                              />

                            <div className="text-center font-bold text-3xl mt-4 text-blue-700">
                               Next Website Coming Soon 
                            </div>
                            <div className="text-center">
                            <button className="btn btn-accent  mt-4"> <BiRightArrow></BiRightArrow> Coming Soon  </button>
                            </div>
                         </a>
                    </div>

               </section>
          </div>
     );
};

export default MySite;