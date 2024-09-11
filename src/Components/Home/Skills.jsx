
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const Skills = () => {
     return (
          <div>
               <section data-aos="zoom-in-down" data-aos-delay="500" className="   mt-5">
                    <div className="container p-6 mx-auto  text-center lg:p-8 ">
                         <h2 className="text-3xl font-bold hover:bg-blue-600 text-white  btn rounded-full bg-gray-400">Skills</h2>
                         <p className='text-center mt-4 text-xl text-gray-200'> The skills, tools and technologies I am really good at: </p>
                         <div className="flex animate-pulse flex-col lg:flex-row justify-between  gap-3 mt-4">
                              <img align="left" alt="Visual Studio Code" width="70px " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="padding-right:10px;" />
                              <img align="left" alt="HTML5" width="70px " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="padding-right:10px;" />
                              <img align="left" alt="CSS3" width="70px " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="padding-right:10px;" />
                              <img align="left" alt="JavaScript" width="70px " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="padding-right:10px;" />
                              <img align="left" alt="React" width="70px " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className=" animate-spin padding-right:10px;" />
                              <img align="left" alt="Node.js" width="70px " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="padding-right:10px;" />
                              <img align="left" alt="MongoDB" width="70px " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="padding-right:10px;" />
                              <img align="left" alt="Git" width="70px " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="padding-right:10px;" />
                              <img align="left" alt="Github"  width="70px " src="https://i.ibb.co.com/CnNr3W6/Type-Github.png" className="padding-right:10px; bg-white" />
                              <img align="left" alt="tailwind"  width="70px " src="https://i.ibb.co.com/DMcFYcp/Type-Default-1.png" className="padding-right:10px; bg-white" />
                              <img align="left" alt="firebase"  width="70px " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGOcsol5dozKeGqpVLC13viYimp-07xdOZA&s" className="padding-right:10px; bg-white" />
                              

                           
                              
                         </div>
                    </div>
               </section>

          </div>
     );
};

export default Skills;