import React,{useState} from 'react';
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";

function LoginPage(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();

    };
    return(
<div>
    <Navbar/>
    <HeroImg2 heading="LOGIN FORM." text="Login to continue"/>
   
   
    {/* <h1>Login</h1> */}
    <form onSubmit={handleSubmit}>
        <label >
            Email:<input type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <label >
            Password:<input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </label>
        <button type="submit"><h1>Login Now</h1></button>
    </form>
   <Footer/>
</div>

        );
}

export default LoginPage;