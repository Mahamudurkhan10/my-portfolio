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
               <Site></Site>
               <MySite></MySite>
               <Responsive></Responsive>
               <Gallery></Gallery>
          </div>
     );
};

export default Home; 