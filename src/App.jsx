import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomeImage from "./components/HomeImage";
import ImageSide from "./components/ImageSide";
import img2 from '/sideImage1.png'
import img3 from '/sideImage2.png'
import ContantImage from "./components/ContantImage";
import img4 from '/ContantImage1.png'
import img5 from '/ContantImage2.png'
import Browse from "./components/Browse";
import Trading from "./components/Trading";
import Customer from "./components/Customer";
import WhyLove from "./components/WhyLove";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="homePage">
        <HomeImage />
        <div className="slide">
          <ImageSide 
            img2={img2}
            contant={'Outdoor Active'}
          />
          <ImageSide 
          img2={img3}
          contant={'Casual Comfort'}
          />
        </div>
      </div>

      <div className="contantImage">
        <Browse />
        <ContantImage 
        img2={img4}
        contant={'Say it with Shirt'}
        />
        <ContantImage 
        img2={img5}
        contant={'Funky never get old'}
        />
      </div>

      <Trading />

      <Customer />

      <WhyLove />

      <BlogSection />

      <Footer />
    </div>
  );
};

export default App;
