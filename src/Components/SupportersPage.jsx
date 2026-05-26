import React from 'react'

function SupportersPage() {
  return (
    <div>
      <h1>Community Supporters 💜</h1>
      <p>People who are part of Shubham’s creative journey.</p>

      <div className="stats-row">
        <div className="stat-box">👥 245 Supporters</div>
        <div className="stat-box">☕ 19 Coffees</div>
        <div className="stat-box">🍬 50 Toffees</div>
        <div className="stat-box">💜 Top 10 This Month</div>
      </div>

      <div className="support-tier">
        <h3>🥇 Gold Supporters</h3>
        <div className="avatar-row">

          <div className="supporter-card">
            <div className="avatar">👩</div>
            <p>Ananya</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">👨</div>
            <p>Rohan</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">🧑</div>
            <p>Priya</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">👩</div>
            <p>Kavya</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">👨</div>
            <p>Sameer</p>
          </div>

        </div>
      </div>

      <div className="support-tier">
        <h3>🥈 Silver Supporters</h3>
        <div className="avatar-row">

          <div className="supporter-card">
            <div className="avatar">👩</div>
            <p>Meera</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">🧑</div>
            <p>Neha</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">👨</div>
            <p>Arjun</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">👩</div>
            <p>Pooja</p>
          </div>

        </div>
      </div>

      <div className="support-tier">
        <h3>🥉 Bronze Supporters</h3>
        <div className="avatar-row">

          <div className="supporter-card">
            <div className="avatar">👨</div>
            <p>Dev</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">👩</div>
            <p>Riya</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">🧑</div>
            <p>Vishal</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">👨</div>
            <p>Kunal</p>
          </div>

          <div className="supporter-card">
            <div className="avatar">👩</div>
            <p>Ayesha</p>
          </div>

        </div>
      </div>

      <div className="cta-box">
        <p>You can do what Shubham is doing ✨</p>
        <button className="cta-btn">Build Your Own Support Circle →</button>
      </div>
    </div>
  )
}

export default SupportersPage