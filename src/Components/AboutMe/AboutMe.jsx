import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const AboutMe = () => {
     return (
          <div className="lg:pt-[100px] pt-[140px] p-3">
               <div   data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="w-1/2 mx-auto">
                    <img src="https://i.ibb.co/tx46hq6/Whats-App-Image-2024-05-02-at-16-04-23-134d2b24-fotor-bg-remover-20240630203722.png" className="lg:size-[500px] rounded-full" alt="" />
               </div>
               <h1 className="text-4xl font-bold"> Hello, I am

               </h1>
               <h1 className="text-4xl font-bold text-yellow-900">  Mahamudur <span className="text-4xl font-bold text-blue-700">Khan</span> </h1>
               <p className="text-xl font-semibold ">  I am a student of CSE Diploma At Tangail Polytechnic Institute. I love to codding . So thats why I learned Web Development. </p>
               <p className="text-lg font-normal "> <span className="text-xl text-blue-600">Now</span> I am a passionate Junior Web Developer eager to contribute to cutting-edge web projects. Proficient in front-end development using HTML, CSS, JavaScript, and React, with a solid understanding of back-end technologies like Node.js and Express.</p>

               <div   data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <h1 className="text-2xl mt-4 font-bold flex lg:flex-row flex-col items-center gap-5"> My Skills :    <div className="flex gap-3 mt-3">
                         <img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="padding-right:10px;" />
                         <img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="padding-right:10px;" />
                         <img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="padding-right:10px;" />
                         <img align="left" alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="padding-right:10px;" />
                         <img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="padding-right:10px;" />
                         <img align="left" alt="Node.js" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="padding-right:10px;" />
                         <img align="left" alt="MongoDB" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="padding-right:10px;" />
                         <img align="left" alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="padding-right:10px;" />

                         <img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" className="padding-right:10px;" />

                    </div> </h1>

               </div>
               <div>
                    <h1 className="text-2xl font-bold mt-5"> Educational Qualification : </h1>
                    <div className="overflow-x-auto mt-2 mb-5">
                         <table className="table border border-x-4 ">

                              <thead >
                                   <tr className=" text-lg font-bold">

                                        <th>Exam name</th>
                                        <th> Group/Department </th>
                                        <th> School/Collage</th>
                                        <th> GPA </th>
                                        <th> Year </th>
                                        <th> Board </th>
                                   </tr>
                              </thead>
                              <tbody className="border">
                                   {/* row 1 */}
                                   <tr>

                                        <td>SSC</td>
                                        <td> Science </td>
                                        <td> Charan High School </td>
                                        <td>4.56</td>
                                        <td>2020</td>
                                        <td> Dhaka</td>
                                   </tr>
                                   {/* row 2 */}
                                   <tr>

                                        <td>Diploma</td>
                                        <td> CST (Computer Science and technology) </td>
                                        <td>Tangail Polytechnic</td>
                                        <td> Internship Running </td>
                                   </tr>

                              </tbody>
                         </table>
                    </div>
               </div>
          </div>

     );
};

export default AboutMe;