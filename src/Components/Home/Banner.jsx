import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { saveAs } from 'file-saver';

AOS.init();

const handleDownload = () => {
    const fileUrl = 'https://i.ibb.co/H4sC0mD/Screenshot-20.png';
    const fileName = 'CV.png';
    saveAs(fileUrl, fileName);
};

const Banner = () => {
    return (
        <div data-aos="fade-down" data-aos-delay="500" className="lg:h-[550px]   p-6 pt-[120px] hover:shadow-2xl rounded-xl ">
            <section className="relative flex flex-col-reverse lg:flex gap-7 lg:flex-row-reverse justify-between items-center bg-cover bg-center bg-no-repeat">
                <div>
                    <div>
                        <h3 className="text-5xl font-bold mb-7">Hello, I am</h3>
                        <h1 className="banner-title text-6xl mb-6 font-bold text-orange-900">
                            Mahamudur <span className='text-blue-800'>Khan</span>
                        </h1>
                        <p className="mt-4 text-lg font-medium">
                            Hello! I'm Mahamudur Khan, a passionate Junior Web Developer eager to contribute to cutting-edge web projects. Proficient in front-end development using HTML, CSS, JavaScript, and React, with a solid understanding of back-end technologies like Node.js and Express.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                           
                            <button
                                onClick={handleDownload}
                                className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            >
                                Download CV
                            </button>
                            <a
                                href="/aboutMe"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <img className="size-[350px] rounded-2xl opacity-95" src="https://i.ibb.co/tx46hq6/Whats-App-Image-2024-05-02-at-16-04-23-134d2b24-fotor-bg-remover-20240630203722.png" alt="Mary Hardy" />
            </section>
        </div>
    );
};

export default Banner;
