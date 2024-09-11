import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../Contact/ContactMe";
import Banner from "./Banner";
import Gallery from "./Gallery";
import MySite from "./MySite";
import Responsive from "./Responsive";
import Site from "./Site";
import Skills from "./Skills";

 

const Home = () => {
     return (
          <div className="">
               <Banner></Banner>
               <Skills></Skills>
                <AboutMe ></AboutMe>
               {/* <Site></Site> */}
               <MySite></MySite>
               <Responsive></Responsive>
               <Gallery></Gallery>
               <ContactMe></ContactMe>
          </div>
     );
};

export default Home; 