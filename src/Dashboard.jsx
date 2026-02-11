import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Dashboard.css';

function Dashboard({ handleLogout }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogoClick = () => {
    handleLogout();
    navigate('/');
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleHamburgerClick = () => {
    navigate('/hotels');
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <button 
            className="sidebar-close-btn"
            onClick={toggleSidebar}
            aria-label="Fermer le menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div 
            className="sidebar-logo-icon" 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <span className="sidebar-logo-text">RED PRODUCT</span>
        </div>

        <div className="sidebar-section">
          <p className="sidebar-section-title">PRINCIPAL</p>
          <nav className="sidebar-nav">
            <button className="sidebar-item active" onClick={() => navigate('/dashboard')}>
              <span className="sidebar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </span>
              Dashboard
            </button>
            <button className="sidebar-item" onClick={() => navigate('/hotels')}>
              <span className="sidebar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v13h2v-2h18v2h2v-9c0-2.21-1.79-4-4-4z"/>
                </svg>
              </span>
              Liste des hôtels
            </button>
          </nav>
        </div>

        <div className="sidebar-user">
          <img 
            src="https://i.pravatar.cc/150?img=12" 
            alt="User" 
            className="user-avatar"
          />
          <div className="user-info">
            <p className="user-name">Fatoumata Camara</p>
            <p className="user-status">
              <span className="status-dot"></span>
              en ligne
            </p>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
        ></div>
      )}

      <main className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="top-bar">
          <div className="top-bar-left">
            {!sidebarOpen && (
              <button 
                className="hamburger-btn-open"
                onClick={handleHamburgerClick}
                aria-label="Aller à la liste des hôtels"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            )}
            <h1 className="page-title">Dashboard</h1>
          </div>
          <div className="top-bar-actions">
            <div className="search-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="Recherche" />
            </div>
            <div className="notification-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
              </svg>
              <span className="notification-badge">3</span>
            </div>
            <img 
              src="https://i.pravatar.cc/150?img=12" 
              alt="Profile" 
              className="profile-pic"
            />
            <button className="logout-icon" onClick={handleLogoutClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 5l7 7-7 7M3 12h14" />
              </svg>
            </button>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="welcome-section">
            <h2>Bienvenue sur RED Product</h2>
            <p className="welcome-subtitle">Lorem ipsum dolor sit amet consectetur</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">125</h3>
                <p className="stat-label">Formulaires</p>
                <p className="stat-description">Je ne sais pas quoi mettre</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">40</h3>
                <p className="stat-label">Messages</p>
                <p className="stat-description">Je ne sais pas quoi mettre</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">600</h3>
                <p className="stat-label">Utilisateurs</p>
                <p className="stat-description">Je ne sais pas quoi mettre</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">25</h3>
                <p className="stat-label">E-mails</p>
                <p className="stat-description">Je ne sais pas quoi mettre</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v13h2v-2h18v2h2v-9c0-2.21-1.79-4-4-4z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">40</h3>
                <p className="stat-label">Hôtels</p>
                <p className="stat-description">Je ne sais pas quoi mettre</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">02</h3>
                <p className="stat-label">Entités</p>
                <p className="stat-description">Je ne sais pas quoi mettre</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;