import "./FormStyles.css";
import React from 'react'

// const Form = () => {
//   return  <div className="form"> 
//   <form >
//     <label>Your Name</label>
//     <input type="text"></input>
//     <label>Email</label>
//     <input type="email" ></input>
//     <label>Subject</label>
//     <input type="text" ></input>
//     <label>Message</label>
//     <textarea rows="6" placeholder="Type Your Message here"/>
//     <button className="btn">Submit</button>
   
//   </form>
  
//   </div>

// }

// export default Form;

import {useState,useEffect} from "react";
function ContactForm(){
  const[formData,setFormData]=useState({name:"",email:""});

  useEffect(()=>{
    localStorage.setItem('formData',JSON.stringify(formData));
  },[formData]);
const handleChange=(event)=>{
  setFormData({...formData,[event.target.name]:event.target.value });
};
const handleSubmit=(event)=>{
  event.preventDefault();

};
return(
  <form onSubmit={handleSubmit}>
    <label>
      Name:<input type="text" name="name" value={formData.name} onChange={handleChange}/>
    </label>
    <label>
      Email:<input type="email" name="email" value={formData.email} onChange={handleChange}/>
    </label>
    <label>
      Subject:<input type="subject" name="Subject" value={formData.subject} onChange={handleChange}/>
    </label>
    <label>
      Message:<input type="message" name="Message" value={formData.message} onChange={handleChange}/>
    </label>
    <button type="submit"><h1>Submit</h1></button>
    
  </form>
)
}

export default ContactForm;