import React from "react";

function AdminPage() {
  return (
    <div className="admin-page">
      <h1>Creator Dashboard 📊</h1>
      <p>Manage your supporters, updates, and earnings.</p>

      {/* Stats Cards */}
      <div className="admin-stats">
        <div className="stat-card">👥 245 Supporters</div>
        <div className="stat-card">☕ 19 Coffees</div>
        <div className="stat-card">🍬 50 Toffees</div>
        <div className="stat-card">💰 ₹12,450 Earned</div>
      </div>

      {/* Recent Support */}
      <div className="admin-box">
        <h2>Recent Support Activity</h2>
        <div className="activity-item">
          <span>Ananya Sharma</span>
          <span>☕ ₹50 Coffee</span>
        </div>
        <div className="activity-item">
          <span>Rohan Patel</span>
          <span>🍬 ₹100 Toffee</span>
        </div>
        <div className="activity-item">
          <span>Priya Mehta</span>
          <span>💛 ₹30 Support</span>
        </div>
      </div>

      {/* Post Update */}
      <div className="admin-box">
        <h2>Post New Update ✍️</h2>
        <input type="text" placeholder="Enter update title..." />
        <textarea placeholder="Write something for your supporters..."></textarea>
        <button className="publish-btn">Publish Update</button>
      </div>

      {/* Manage Supporters */}
      <div className="admin-box">
        <h2>Manage Supporters 👥</h2>
        <input type="text" placeholder="Search supporter..." />

        <div className="supporter-manage">
          <span>Ananya Sharma</span>
          <div>
            <button>Gold</button>
            <button>Remove</button>
          </div>
        </div>

        <div className="supporter-manage">
          <span>Rohan Patel</span>
          <div>
            <button>Silver</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;