import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger visible sur mobile */}
      <button
  className="hamburger-btn-open"
  onClick={() => setSidebarOpen(true)}
  aria-label="Ouvrir la sidebar"
>
  ☰
</button>


      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <h3>PRODUIT ROUGE</h3>

        <ul>
          <li>
            <Link
              to="/dashboard"
              className="sidebar-link"
              onClick={() => setOpen(false)}
            >
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link
              to="/hotels"
              className="sidebar-link"
              onClick={() => setOpen(false)}
            >
              Liste des hôtels
            </Link>
          </li>
        </ul>

        <div className="user">
          <p>MAMADOU NDOUR</p>
          <span>● en ligne</span>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .sidebar {
          width: 220px;
          background-color: #222;
          color: #fff;
          padding: 20px;
          min-height: 100vh;
          box-sizing: border-box;
          transition: transform 0.3s ease;
        }

        .sidebar h3 {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        .sidebar-link {
          display: block;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 8px 12px;
          border-radius: 6px;
          margin-bottom: 10px;
          transition: all 0.3s ease;
        }

        .sidebar-link:hover {
          background-color: #4caf50;
        }

        .user p, .user span {
          margin-top: 20px;
          display: block;
        }

        .hamburger {
          display: none;
          font-size: 2rem;
          background: none;
          border: none;
          color: #222;
          cursor: pointer;
          position: fixed;
          top: 15px;
          left: 15px;
          z-index: 1001;
        }

        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 180px;
            transform: translateX(-100%);
            z-index: 1000;
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .hamburger {
            display: block;
          }

          .sidebar h3 {
            font-size: 1rem;
          }

          .sidebar-link {
            font-size: 0.95rem;
            padding: 6px 10px;
          }
        }

        @media (max-width: 480px) {
          .sidebar {
            width: 150px;
          }

          .sidebar h3 {
            font-size: 0.85rem;
          }

          .sidebar-link {
            font-size: 0.8rem;
            padding: 5px 8px;
          }

          .user p, .user span {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}

export default Sidebar;