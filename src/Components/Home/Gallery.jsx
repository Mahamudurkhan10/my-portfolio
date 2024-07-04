

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';




import { Pagination } from 'swiper/modules';


const Gallery = () => {
     return (
          <div className=' mb-9'>
               <h1 className='text-4xl font-bold text-center m-6'> My WebSites Gallery </h1>
               <p className='w-2/3 text-center font-semibold mb-5 mx-auto'>Welcome to our amazing website preview! Dive into a vibrant world where creativity meets functionality. Experience seamless navigation, stunning visuals, and cutting-edge features designed to captivate and engage. </p>

               <div>
                    <Swiper
                         slidesPerView={3}
                         spaceBetween={30}
                         pagination={{
                              clickable: true,
                         }}
                         modules={[Pagination]}
                         className="mySwiper"
                    >
                         <SwiperSlide>  <img
                              alt=""
                              src="https://i.ibb.co/p1qJ51v/Screenshot-16.png"
                              className=" size-[380px] hover:shadow-2xl w-full rounded-md object-cover"
                         />
                         </SwiperSlide>
                         <SwiperSlide> <img
                              alt=""
                              src="https://i.ibb.co/1dfzTBh/Screenshot-17.png"
                              className=" size-[380px] w-full hover:shadow-2xl rounded-md object-cover"
                         />
                         </SwiperSlide>
                         <SwiperSlide><img
                              alt=""
                              src="https://i.ibb.co/5k25N6M/Screenshot-18.png"
                              className=" size-[380px] w-full hover:shadow-2xl rounded-md object-cover"
                         /></SwiperSlide>
                         <SwiperSlide><img
                              alt=""
                              src="https://i.ibb.co/vmkQbkW/Screenshot-19.png"
                              className=" size-[380px] w-full hover:shadow-2xl rounded-md object-cover"
                         /></SwiperSlide>
                         <SwiperSlide><img
                              alt=""
                              src="https://up2client.com/envato/biogi/assets/images/coming-soon.jpg"
                              className=" size-[380px] w-full hover:shadow-2xl rounded-md object-cover"
                         /></SwiperSlide>

                    </Swiper>
               </div>
          </div>
     );
};

export default Gallery;