import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const Site = () => {
     return (
          <div className="mt-7">
               <section>
                    <h1 className=" lg:text-6xl text-3xl text-center font-semibold "> CREATE A AMAZING  </h1>
                    <h1 className=" lg:text-6xl text-3xl text-center font-semibold "> SITE TODAY! </h1>
               </section>
               <section data-aos="fade-down" data-aos-delay="500" className="mt-5">
                    <div className="lg:flex lg:justify-center text-center  text-2xl gap-9 ">

                         <li> Responsive Design</li>
                         <li> Fast Performance</li>
                         <li> Standard Code</li>


                    </div>
                    <div className="lg:flex lg:justify-center text-center text-2xl mt-5 gap-9">

                         <li> Easy To Customize
                         </li>
                         <li> Reatina Ready </li>


                    </div>
               </section>
               <section data-aos="zoom-in-up" data-aos-delay="500" className="grid grid-cols-2 lg:grid-cols-4 mt-5 justify-around gap-5">
                    <div className="card card-bordered p-4">
                         <h1 className="text-xl font-bold"> Responsive Designs </h1>
                         <p className="font-medium">Experience flawless viewing on any device. Our templates adapt seamlessly to all screen sizes, ensuring your portfolio looks stunning whether on a desktop, tablet, or smartphone. </p>
                    </div>
                    <div className="card card-bordered p-4">
                         <h1 className="text-xl font-bold"> Responsive Designs </h1>
                         <p className="font-medium">Experience flawless viewing on any device. Our templates adapt seamlessly to all screen sizes, ensuring your portfolio looks stunning whether on a desktop, tablet, or smartphone. </p>
                    </div>
                    <div className="card card-bordered p-4">
                         <h1 className="text-xl font-bold"> Responsive Designs </h1>
                         <p className="font-medium">Experience flawless viewing on any device. Our templates adapt seamlessly to all screen sizes, ensuring your portfolio looks stunning whether on a desktop, tablet, or smartphone. </p>
                    </div>
                    <div className="card card-bordered p-4">
                         <h1 className="text-xl font-bold"> Responsive Designs </h1>
                         <p className="font-medium">Experience flawless viewing on any device. Our templates adapt seamlessly to all screen sizes, ensuring your portfolio looks stunning whether on a desktop, tablet, or smartphone. </p>
                    </div>
               </section>
          </div>
     );
};

export default Site;