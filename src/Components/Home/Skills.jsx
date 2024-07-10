
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const Skills = () => {
     return (
          <div>
               <section data-aos="zoom-in-down" data-aos-delay="500" className="   mt-5">
                    <div className="container p-6 mx-auto space-y-6 text-start lg:p-8 lg:space-y-8">
                         <h2 className="text-3xl font-bold">Fully compatible with</h2>

                         <div className="flex flex-wrap bg-gray-50 rounded-2xl p-2 justify-start  gap-12">
                              <img className="w-32 h-12" src="https://i.ibb.co/ZBgCSK2/file.png" alt="" />
                              <img className="size-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png" alt="" />
                              <img className="size-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="" />
                              <img className="size-12" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg" alt="" />
                              <img className="size-12 " src="https://cdn.iconscout.com/icon/free/png-256/free-react-4-1175110.png?f=webp&w=256" alt="" />

                              <img className="size-14 " src="https://btihen.dev/posts/ruby/rails_6_1_tailwind_2_0_alpinejs/featured.png" alt="" />
                              <img className="size-14 " src="https://i.ibb.co/nzHbRnc/images.png" alt="" />
                              <img className="size-14 " src="https://media.licdn.com/dms/image/D4D12AQGZ2Hek_UgBsg/article-cover_image-shrink_600_2000/0/1689418463906?e=2147483647&v=beta&t=zlzxtR63RS73DzOdIJp_-jH0lnkSEg8GjjEbZSk8Gek" alt="" />
                              <img className="size-14  " src="https://cdn.iconscout.com/icon/free/png-256/free-github-169-1174970.png" alt="" />
                              <img className="size-14 " src="https://i.ibb.co/Qf24b0j/file-2.png" alt="" />
                              <img className="size-14 " src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />


                         </div>
                    </div>
               </section>
               <section data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="bg-gray-50 rounded-2xl mt-6  p-5">
                    <h1 className="text-3xl font-semibold text-center"> <span className="text-3xl text-blue-600">Please Visit Here!!</span>  This is my Github Profile </h1>
                    <a href="https://github.com/Mahamudurkhan10" className="flex text-purple-700 font-bold text-2xl items-center justify-center mt-5"> <span> Mahamudurkhan10 </span> <img className="size-14 " src="https://iconape.com/wp-content/png_logo_vector/github-square.png" alt="" />  </a>
               </section>
          </div>
     );
};

export default Skills;