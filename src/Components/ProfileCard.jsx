import React from 'react'

function ProfileCard() {
  return (
    <div className="profile-card">

      <div className="cover-image"></div>
     
      <div className="profile-image"></div>

      <h2>Shubham N Datarkar</h2>
      <p>Photographer & Creative Writer</p>

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
      <div className="social-links">
  <button><i className="fa-brands fa-instagram"></i> Instagram</button>
  <button><i className="fa-brands fa-youtube"></i> YouTube</button>
  <button><i className="fa-brands fa-facebook"></i> Facebook</button>
</div>

      <p>📍 Nagpur, India</p>

      <h4>❤️ 128 Supporters</h4>

      <div className="badges">
  <span>🍬 245 Times <br /> Thank you for your support!</span>

  <div className="trophies">
  <div className="trophy-item">🏆</div>
  <div className="trophy-item">📸</div>
  <div className="trophy-item">✍️</div>
  <div className="trophy-item">💜</div>
</div>
</div>

    </div>
  )
}

export default ProfileCard