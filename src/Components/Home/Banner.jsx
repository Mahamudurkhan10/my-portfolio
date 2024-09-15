import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { saveAs } from 'file-saver';
import { Typewriter } from 'react-simple-typewriter';


AOS.init();

// const handleDownload = () => {
//     const fileUrl = 'https://i.ibb.co/H4sC0mD/Screenshot-20.png';
//     const fileName = 'CV.png';
//     saveAs(fileUrl, fileName);
// };

const Banner = () => {
    return (
        <div  className="lg:h-[550px] p-6 pt-[120px] border-2 border-[#292929] rounded-xl">
            <section className="relative flex flex-col-reverse lg:flex gap-7 lg:flex-row-reverse justify-around items-center bg-cover bg-center bg-no-repeat">
                <div className="max-w-[600px]">
                    <div>
                        <h3 className="text-5xl font-bold text-blue-400 mb-7">
                        <Typewriter
                                words={['Hello , I am']}
                                
                                cursor
                                cursorStyle='--'
                                typeSpeed={120}
                             
                            />
                        </h3>
                        <h1 className="banner-title text-6xl mb-6 font-bold text-orange-800">
                            <Typewriter
                                words={['Mahamudur Khan']}
                                
                                cursor
                                cursorStyle='..'
                                typeSpeed={90}
                                deleteSpeed={70}
                                delaySpeed={8000}
                            />
                        </h1>
                        <p className="mt-4 text-lg font-medium text-white">
                            Hello! 
                            <Typewriter
                                words={[" I'm Mahamudur Khan, a passionate Junior Web Developer eager to contribute to cutting-edge web projects. Proficient in front-end development using HTML, CSS, JavaScript, and React, with a solid understanding of back-end technologies like Node.js and Express."]}
                                
                                cursor
                                cursorStyle='..'
                                typeSpeed={90}
                             
                                delaySpeed={8000}
                            />
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <button
                                // onClick={handleDownload}
                                className="block w-full rounded animate-bounce hover:animate-none bg-blue-700 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            >
                                Download resume
                            </button>
                            <a
                                href="/aboutMe"
                                className="block w-full rounded bg-white px-6 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <img className="max-w-[350px] rounded-2xl opacity-95 animate-pulse shadow-lg  transition-all duration-100 hover:scale-110" src="https://i.ibb.co/tx46hq6/Whats-App-Image-2024-05-02-at-16-04-23-134d2b24-fotor-bg-remover-20240630203722.png" alt="Mary Hardy" />
            </section>
        </div>
    );
};

export default Banner;
