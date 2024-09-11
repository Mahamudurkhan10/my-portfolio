import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

AOS.init()
const AboutMe = () => {
     return (
          <div id='about'  className='text-white'>
               <div className='text-center'>
               <h1 className='text-3xl hover:bg-blue-700 animate-pulse font-bold text-blue-700 hover:text-white  btn rounded-full bg-gray-400'> About Me  </h1>
               </div>
               <div>
                    <h1  className='text-2xl text-indigo-500 font-semibold'> Curious about me? Here you have it: </h1>
                    <h1 className=' py-2 text-xl font-normal'>
                    <Typewriter
                                words={["I’m Mahamudur Khan, a passionate and driven Computer Science and Engineering (CSE) student at TPI. I have a strong interest in web development, specializing in Frontend Development with expertise in HTML, CSS, JavaScript, React.js, and Next.js. Alongside my frontend skills, I also have experience in backend technologies like Node.js, Express.js, and MongoDB, allowing me to develop full-stack applications. My hobbies include exploring new web technologies, learning about modern web frameworks, and solving complex problems through code. In my free time, I enjoy working on personal projects, refining my skills, and staying up-to-date with the latest trends in UI/UX design and web development"]}
                                
                                cursor
                                cursorStyle='..'
                                typeSpeed={30}
                             
                                delaySpeed={8000}
                            />
                         </h1>
               </div>
               <div>
                    <h1 className='text-2xl font-semibold text-blue-700'> Education  </h1>
                     <h1 className='text-xl text-yellow-700'> Diploma in Computer Science and Technology </h1>
                      <p className='text-gray-500'> Tangail Polytechnic Institute </p>
                     <h1 className='text-xl text-yellow-700'> Secondary School Certificate(SSC) </h1>
                      <p className='text-gray-500'> Charan High School</p>
               </div>
               <div>
                    <h1 className='text-2xl font-semibold text-blue-600'> Connect With Me ! </h1>
                    <div className='flex gap-4'>
                    <Link to={'https://github.com/Mahamudurkhan10'}><img align="left" alt="Github"  width="30px " src="https://i.ibb.co.com/CnNr3W6/Type-Github.png" className="padding-right:10px; bg-white rounded-full" /></Link>
                    <Link to={'https://www.linkedin.com/in/mahamudur-khan/'}><img align="left" alt="Github"  width="30px " src="https://e7.pngegg.com/pngimages/602/665/png-clipart-linkedin-linkedin-thumbnail.png" className="padding-right:10px; bg-white rounded-full" /></Link>
                    </div>
               </div>
          </div>

     );
};

export default AboutMe;