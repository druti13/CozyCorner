import React from 'react';
import Navbar from './components/Navbar/Navbar';

import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import kitchen from "./assets/kitchen.png";
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";


const BannerData = {
  discount: "60% OFF",
  title: "Easy Life",
  date: "18 July to 28 July",
  image: kitchen,
  title2: "Electronics Kitchen set ",
  title3: "Hot Sale",
  
  bgColor: "#01204E",
};



const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  
  return (
    <div className='bg-white/90 dark:bg-stone-200 dark:text-white duration-200
    overflow-hidden'>
      <Navbar  />
      <Hero  />
     <Category/>
     <Category2/>
     
     <Banner data={BannerData} />
     <Services/>
     <Blogs/>
     <Footer/>
     
    
    </div>
  )
}

export default App