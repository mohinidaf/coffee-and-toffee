import React from 'react'

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">

      <button
        className={activeTab === "support" ? "active" : ""}
        onClick={() => setActiveTab("support")}
      >
        Support
      </button>

      <button
        className={activeTab === "updates" ? "active" : ""}
        onClick={() => setActiveTab("updates")}
      >
        Updates
      </button>

      <button
        className={activeTab === "supporters" ? "active" : ""}
        onClick={() => setActiveTab("supporters")}
      >
        Supporters
      </button>

      <button
        className={activeTab === "admin" ? "active" : ""}
        onClick={() => setActiveTab("admin")}
      >
        Admin
      </button>

    </div>
  )
}

export default Tabs