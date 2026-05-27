import React from 'react'
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaGlobe
 } from "react-icons/fa";
 
 import { FaXTwitter } from "react-icons/fa6";
function ProfileCard() {
  return (
    <div className="profile-card">

     
      <div className="profile-cover">
  <img
    src="https://www.shutterstock.com/image-vector/exotic-hand-drawn-flowers-seamless-260nw-2763246775.jpg"
    alt="cover"
  />

  
</div>
    
    

      <h2>Shubham N Datarkar</h2>
      <h4 >Photographer & Creative Writer</h4>

      <p>
      Capturing stories through photography and sharing creativity with a supportive community.
      </p>

      <div className="profile-avatar">
  <div className="avatar-circle">
    <i className="fa-regular fa-user"></i>
  </div>

  <div className="verified-badge">
    <i className="fa-solid fa-check"></i>
  </div>
</div>
 
<div className="social-row">
  <a href="#" className="social-icon"><FaInstagram /></a>
  <a href="#" className="social-icon"><FaXTwitter /></a>
  <a href="#" className="social-icon"><FaLinkedinIn /></a>
  <a href="#" className="social-icon"><FaYoutube /></a>
  <a href="#" className="social-icon"><FaGithub /></a>
  <a href="#" className="social-icon"><FaGlobe /></a>
</div>

<p className="location">📍 Nagpur, Maharashtra</p>

   

      <h4>❤️ 128 Supporters</h4>

      <div className="badges">
  <span>🍬 X 245 Times <br /> Thank you for your support!</span>

  <h3 className="trophy-title">✨ Trophies ✨</h3>

<div className="trophies-row">
  <div className="trophy-icon">🖼️</div>
  <div className="trophy-icon">🏆</div>
  <div className="trophy-icon">🎩</div>
  <div className="trophy-icon">🖤</div>
  <div className="trophy-icon">☕</div>
</div>
</div>

    </div>
  )
}

export default ProfileCard