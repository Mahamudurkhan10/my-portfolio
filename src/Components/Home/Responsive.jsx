import { BiMobile } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";
import { LuLaptop } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { TfiTablet } from "react-icons/tfi";


const Responsive = () => {
     return (
          <div>
               <div className="text-center">
               <h1 className="text-4xl font-bold btn animate-pulse hover:text-white hover:animate-none  rounded-full bg-gray-400 text-blue-900 text-center mt-9"> Full Responsive Design </h1>
               </div>
               
                 <section className="grid lg:grid-cols-4 grid-cols-2 text-white opacity-70 mt-9 p-3 gap-[30px] lg:ml-[100px]">
                     <div>
                          <span className="text-9xl"> <RiComputerLine /> </span>
                          <p className="text-xl font-bold">1920 x 1080px</p>
                          <p className="text-xl font-medium">Full Screen Layout</p>
                     </div>
                     <div>
                          <span className="text-9xl"> <LuLaptop /> </span>
                          <p className="text-xl font-bold">1364 x 768px</p>
                          <p className="text-xl font-medium">Laptop Screen Layout</p>
                     </div>
                     <div>
                          <span className="text-9xl"> <TfiTablet /> </span>
                          <p className="text-xl font-bold">1024 x 768px</p>
                          <p className="text-xl font-medium">Tablet Screen Layout</p>
                     </div>
                     <div>
                          <span className="text-9xl"> <BiMobile /> </span>
                          <p className="text-xl font-bold">767 x 365px</p>
                          <p className="text-xl font-medium">Mobile Screen Layout</p>
                     </div>
                 </section>
                   
          </div>
     );
};

export default Responsive;