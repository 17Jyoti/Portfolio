import "./FooterStyles.css"

import React from 'react'

import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem7"}}/>
                <div>
                    <p>195 Ganesh Vihar</p>
                    <p>Derabassi</p>
                </div>
            </div>
            {/* </div> */}
            <div className="phone">
                <h4>  <FaPhone size={20} style={{color: "#fff", marginRight: "2rem7"}}/>
            95925-557241</h4>
            </div>
            <div className="email">
                <h4>  <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem7"}}/>
           jyoti.am910@gmail.com</h4>
            </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Jyoti Mittal.Currently pursuing BTech CSE from CGC mohali.
                    I enjoying discussing new projects and design challenges
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color: "#fff", marginRight: "2rem7"}}/>
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem7"}}/>
                <FaTwitter size={30} style={{color: "#fff", marginRight: "2rem7"}}/>
                </div>

            </div>
        </div>
         </div>
  )
}

export default Footer

