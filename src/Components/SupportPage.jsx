import React, { useState } from 'react'

 
function SupportPage() {
  const [selectedCoffee, setSelectedCoffee] = useState(19)
  const [selectedCandy, setSelectedCandy] = useState(50)

  return (
    <div className="support-page">
      <h1>Support Shubham’s Photography <br />and Creative Writing</h1>
      <div className="selectors-row">
      {/* Coffee selector */}
      <div className="selector-box">
        <span className="icon">☕</span>
        <span className="multiply">×</span>

        <button
          className={selectedCoffee === 19 ? "circle active-yellow" : "circle"}
          onClick={() => setSelectedCoffee(19)}
        >
          19
        </button>

        <button
          className={selectedCoffee === 49 ? "circle active-yellow" : "circle"}
          onClick={() => setSelectedCoffee(49)}
        >
          49
        </button>

        <button
          className={selectedCoffee === 99 ? "circle active-yellow" : "circle"}
          onClick={() => setSelectedCoffee(99)}
        >
          99
        </button>

        <button className="custom-box">19</button>
      </div>

      {/* Candy selector */}
      <div className="selector-box">
        <span className="icon">🍬</span>
        <span className="multiply">×</span>

        <button
          className={selectedCandy === 10 ? "circle active-red" : "circle"}
          onClick={() => setSelectedCandy(10)}
        >
          10
        </button>

        <button
          className={selectedCandy === 30 ? "circle active-red" : "circle"}
          onClick={() => setSelectedCandy(30)}
        >
          30
        </button>

        <button
          className={selectedCandy === 50 ? "circle active-red" : "circle"}
          onClick={() => setSelectedCandy(50)}
        >
          50
        </button>

        <button className="custom-box red-border">50</button>
      </div>
</div>
      {/* Form */}
      <div className="form-row">
        <input type="text" placeholder="Name or @username" />
        <input type="email" placeholder="Email Address" />
      </div>

      <textarea placeholder="Let’s talk something nice here..."></textarea>

      <div className="checkbox-row">
        <input type="checkbox" />
        <label>I want to cover payment gateway charges and GST (+2.4%)</label>
      </div>

      <button className="support-btn">
        💛 Support with Rs. 69 Only
      </button>

      <div className="support-card">
  <div className="support-left">
    <span>👥</span>
    <p>Ananya, Rohan and 47 others supported recently 💜</p>
  </div>

  <div className="support-right">
    <p>Your support means<br />the world!</p>
    <span>☕✨</span>
  </div>
</div>
    </div>
  )
}

export default SupportPage