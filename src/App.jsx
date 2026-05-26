import React, { useState } from 'react'
import './App.css'

import ProfileCard from './Components/ProfileCard'
import Tabs from './Components/Tabs'
import SupportPage from './Components/SupportPage'
import UpdatesPage from './Components/UpdatesPage'
import SupportersPage from './Components/SupportersPage'
import AdminPage from './Components/AdminPage'

function App() {
  const [activeTab, setActiveTab] = useState("support")

  const renderPage = () => {
    if (activeTab === "support") return <SupportPage />
    if (activeTab === "updates") return <UpdatesPage />
    if (activeTab === "supporters") return <SupportersPage />
    if (activeTab === "admin") return <AdminPage />
  }

  return (
    <div className="app-container">

      {/* Left Side */}
      <div className="left-section">
        <ProfileCard />
      </div>

      {/* Right Side */}
      <div className="right-section">

        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="page-content">
          {renderPage()}
        </div>

      </div>

    </div>
  )
}

export default App