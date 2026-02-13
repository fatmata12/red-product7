import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard({ handleLogout }) {
  const navigate = useNavigate();

  // Sidebar ouverte sur desktop, fermée sur mobile
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  // Détection resize automatique
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogoClick = () => {
    handleLogout();
    navigate('/');
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <div className="app-layout">
      {/* Hamburger (Mobile seulement) */}
      <button
        className={`hamburger-btn ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* ================= SIDEBAR ================= */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
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
            <button
              className="sidebar-item active"
              onClick={() => navigate('/dashboard')}
            >
              <svg className="sidebar-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              Dashboard
            </button>
            <button
              className="sidebar-item"
              onClick={() => navigate('/hotels')}
            >
              <svg className="sidebar-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 11H5v7h2v-7zm4 0H9v7h2v-7zm4 0h-2v7h2v-7zm4 0h-2v7h2v-7zm-8-9H9v2h2V2zm4 0h-2v2h2V2zm4 0h-2v2h2V2zm-12 4H9v2h2V6zm4 0h-2v2h2V6zm4 0h-2v2h2V6z"/>
              </svg>
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
            <p className="user-name">Abdoul aziz Ndour</p>
            <p className="user-status">
              <span className="status-dot"></span>
              en ligne
            </p>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <h1 className="page-title">Dashboard</h1>

          <div className="top-bar-actions">
            <div className="search-box">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <input type="text" placeholder="Recherche" />
            </div>

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="profile-pic"
            />

            <button className="logout-icon" onClick={handleLogoutClick}>
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="welcome-section">
            <h2>Bienvenue sur RED Product</h2>
            <p className="welcome-subtitle">
              Gestion complète de vos hôtels
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon purple">
                <svg fill="white" viewBox="0 0 24 24" width="32" height="32">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">125</h3>
                <p className="stat-label">Formulaires</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon teal">
                <svg fill="white" viewBox="0 0 24 24" width="32" height="32">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">40</h3>
                <p className="stat-label">Messages</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon yellow">
                <svg fill="white" viewBox="0 0 24 24" width="32" height="32">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">600</h3>
                <p className="stat-label">Utilisateurs</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon red">
                <svg fill="white" viewBox="0 0 24 24" width="32" height="32">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">25</h3>
                <p className="stat-label">E-mails</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">
                <svg fill="white" viewBox="0 0 24 24" width="32" height="32">
                  <path d="M12 11.5A2.5 2.5 0 0 0 9.5 9a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 9.5 14a2.5 2.5 0 0 0 2.5-2.5zM12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13s-7-7.75-7-13a7 7 0 0 1 7-7z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">40</h3>
                <p className="stat-label">Hôtels</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon magenta">
                <svg fill="white" viewBox="0 0 24 24" width="32" height="32">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="stat-info">
                <h3 className="stat-number">02</h3>
                <p className="stat-label">Entités</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;