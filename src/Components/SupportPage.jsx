import React from 'react'

function SupportPage() {
  return (
    <div>
      <h1>Support Shubham’s Creative Journey ☕</h1>
      <p>Every support fuels creativity and storytelling.</p>


      <div className="amount-buttons">
        <button>☕ ₹19</button>
        <button>☕ ₹49</button>
        <button>☕ ₹99</button>
        <button>🍬 ₹50</button>
      </div>

      <div className="form-row">
        <input type="text" placeholder="Name or username" />
        <input type="email" placeholder="Email address" />
      </div>

      <textarea placeholder="Leave a message (optional)"></textarea>

      <div className="checkbox-row">
        <input type="checkbox" />
        <label>I want to cover payment charges (+2.4%)</label>
      </div>

      <button className="support-btn">
        💛 Support with Rs. 69 Only
      </button>

      <div className="support-card">
        👥 Ananya, Rohan and 47 others supported recently 💜
      </div>
    </div>
  )
}

export default SupportPage