import React from 'react'
import { FaUser } from "react-icons/fa";

function SupportersPage() {

  const goldSupporters = [
    "Ananya",
    "Rohan",
    "Priya",
    "Kavya",
    "Sameer",
   
    "Aarav"
  ]

  const silverSupporters = [
    "Meera",
    "Neha",
    "Arjun",
    "Pooja",
    "Rahul",
    "Sneha",
   
  ]

  const bronzeSupporters = [
    "Dev",
    "Riya",
    "Vishal",
    "Kunal",
    "Ayesha",
 
  ]

  return (

    <div className='supporters'>

      <h1>
        Community Supporters 💜
      </h1>

      <p>
        People who are part of Shubham’s creative journey.
      </p>

      <div className="stats-row">

<div className="stat-box">
  <div className="stat-icon">👥</div>
  <div className="stat-number">245</div>
  <div className="stat-title">Supporters</div>
  <div className="stat-sub">
    Thank you for being part of this journey!
  </div>
</div>

<div className="stat-box">
  <div className="stat-icon">☕</div>
  <div className="stat-number">19</div>
  <div className="stat-title">Coffees</div>
  <div className="stat-sub">Coffees Received</div>
</div>

<div className="stat-box">
  <div className="stat-icon">🍬</div>
  <div className="stat-number">50</div>
  <div className="stat-title">Toffees</div>
  <div className="stat-sub">Treats Received</div>
</div>

<div className="stat-box">
  <div className="stat-icon">💜</div>
  <div className="stat-number">Top 10</div>
  <div className="stat-title">This Month</div>
  <div className="stat-sub">Community Favorites</div>
</div>

</div>

    
      <div className="support-tier gold">

        <h3>
          🥇 Gold Supporters

          <span className="top-supporters">
            Our Top Supporters
          </span>
        </h3>

        <span className="view-all">
          View All →
        </span>

        <div className="avatar-row">

          {
            goldSupporters.map((name, index) => (

              <div className="supporter-card" key={index}>

                <div className="avatar">
                  <FaUser />
                </div>

                <p>{name}</p>

              </div>

            ))
          }

        </div>

      </div>



    
      <div className="support-tier silver">

        <h3>
          🥈 Silver Supporters
        </h3>

        <span className="view-all">
          View All →
        </span>

        <div className="avatar-row">

          {
            silverSupporters.map((name, index) => (

              <div className="supporter-card" key={index}>

                <div className="avatar">
                  <FaUser />
                </div>

                <p>{name}</p>

              </div>

            ))
          }

        </div>

      </div>




   
      <div className="support-tier bronze">

        <h3>
          🥉 Bronze Supporters
        </h3>

        <span className="view-all">
          View All →
        </span>

        <div className="avatar-row">

          {
            bronzeSupporters.map((name, index) => (

              <div className="supporter-card" key={index}>

                <div className="avatar">
                  <FaUser />
                </div>

                <p>{name}</p>

              </div>

            ))
          }
 </div>
  </div>

      <div className="cta-box">

        <p>
          You can do what Shubham is doing ✨
        </p>

        <button className="cta-btn">
          Build Your Own Support Circle →
        </button>

      </div>

    </div>
  )
}

export default SupportersPage