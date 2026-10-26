import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import EducationContent from "../components/EducationContent";

const Education = () => {
  return <div>
    <Navbar/>
    <HeroImg2 heading="EDUCATION." text="My Qualification"/>
   <EducationContent />
    <Footer/>
  </div>
  
};

export default Education;