import { useNavigate, useLocation } from 'react-router-dom';
import './Dashboard.css';

function Sidebar({ setSidebarOpen, handleLogout, sidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      {/* HEADER */}
      <div className="sidebar-header">
        <span className="sidebar-logo-text">RED PRODUCT</span>

        {/* CLOSE BUTTON (mobile) */}
        <button
          className="close-sidebar"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* NAV */}
      <nav className="sidebar-nav">
        <button
          className={`sidebar-item ${
            location.pathname === '/dashboard' ? 'active' : ''
          }`}
          onClick={() => {
            navigate('/dashboard');
            setSidebarOpen(false);
          }}
        >
          Dashboard
        </button>

        <button
          className={`sidebar-item ${
            location.pathname === '/hotels' ? 'active' : ''
          }`}
          onClick={() => {
            navigate('/hotels');
            setSidebarOpen(false);
          }}
        >
          Liste des hôtels
        </button>
      </nav>

      {/* USER */}
      <div className="sidebar-user">
        <div className="user-info">
          <p className="user-name">Abdoul Aziz Ndour</p>
          <p className="user-status">En ligne</p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;