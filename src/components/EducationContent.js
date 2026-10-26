import "./EducationContentStyles.css"

import React from 'react';


const EducationContent = () => {
  return  <div className="Education">
    <div className="education-container">
        <div className="education">
            <h3>- 10TH -</h3>
            <span className="bar"></span>
            <p> Session:2018-2019</p>
            <p> CBSE Board </p>
            <p> Lala Deep Chand Jain Public School </p>
            <p></p>
       
           
        </div>
        <div className="education">
            <h3>-12TH -</h3>
            <span className="bar"></span>
            <p>Session:2020-2021</p>
            <p> CBSE Board </p>
            <p> Lala Deep Chand Jain Public School </p>
            <p>  </p>
           
        </div>
        <div className="education">
        <h3>- Graduation -</h3>
            <span className="bar"></span>
            <p>Session:2021-2025</p>
            <p>Currently pursuing Btech CSE</p>
            <p> Chandigarh group of colleges Landran </p>
            <p> 8.43 CGPA(Till 7th semester)</p>
           
        </div>
    </div>
  </div>
  
};

export default EducationContent;