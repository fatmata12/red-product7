import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Dashboard.css';

function HotelList({ handleLogout }) {
  const navigate = useNavigate();

  // Sidebar ouverte sur desktop
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  // Détection changement taille écran
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    price: '',
    currency: 'F XOF',
    image: null
  });

  const hotels = [
    { id:1, nom:'Hôtel Terrou-Bi', adresse:'Boulevard Martin Luther King Dakar, 11500', prix:'25,000 XOF par nuit', image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop' },
    { id:2, nom:'King Fahd Palace', adresse:'Rte des Almadies, Dakar', prix:'20,000 XOF par nuit', image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&h=300&fit=crop' },
    { id:3, nom:'Radisson Blu Hotel', adresse:'Rte de la Corniche O, Dakar 16868', prix:'22,000 XOF par nuit', image:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop' },
    { id:4, nom:'Pullman Dakar Teranga', adresse:"Place de l'indépendance, 10 Rue Ps, 29, Dakar", prix:'30,000 XOF par nuit', image:'https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&h=300&fit=crop' },
    { id:5, nom:'Hôtel Lac Rose', adresse:'Lac Rose, Dakar', prix:'25,000 XOF par nuit', image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=300&fit=crop' },
    { id:6, nom:'Hôtel Saly', adresse:'Mbour, Sénégal', prix:'20,000 XOF par nuit', image:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop' },
    { id:7, nom:'Palm Beach Resort & Spa', adresse:'BP64, Saly 23000', prix:'22,000 XOF par nuit', image:'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop' },
    { id:8, nom:'Pullman Dakar Teranga', adresse:"Place de l'indépendance, 10 Rue Ps, 29, Dakar", prix:'30,000 XOF par nuit', image:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file) setFormData(prev => ({ ...prev, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Hôtel créé avec succès!');
    setShowCreateModal(false);
    setFormData({ name:'', address:'', email:'', phone:'', price:'', currency:'F XOF', image:null });
  };

  const handleLogoClick = () => { handleLogout(); navigate('/'); };
  const handleLogoutClick = () => { handleLogout(); navigate('/'); };

  return (
    <div className="app-layout">

      {/* ✅ HAMBURGER */}
      <button
        className={`hamburger-btn ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* ✅ OVERLAY */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo-icon" onClick={handleLogoClick} style={{cursor:'pointer'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <span className="sidebar-logo-text">RED PRODUCT</span>
        </div>

        <div className="sidebar-section">
          <p className="sidebar-section-title">PRINCIPAL</p>
          <nav className="sidebar-nav">
            <button className="sidebar-item" onClick={() => navigate('/dashboard')}>Dashboard</button>
            <button className="sidebar-item active" onClick={() => navigate('/hotels')}>Liste des hôtels</button>
          </nav>
        </div>

        <div className="sidebar-user">
          <img src="https://i.pravatar.cc/150?img=12" alt="User" className="user-avatar"/>
          <div className="user-info">
            <p className="user-name">Abdoul aziz Ndour</p>
            <p className="user-status"><span className="status-dot"></span>en ligne</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Top Bar */}
        <div className="top-bar">
          <h1 className="page-title">Liste des hôtels</h1>
          <div className="top-bar-actions">
            <div className="search-box">
              <input type="text" placeholder="Recherche" />
            </div>
            <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="profile-pic"/>
            <button className="logout-icon" onClick={handleLogoutClick}>Logout</button>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="hotels-list-content">
          <div className="hotels-header">
            <div className="hotels-title">
              <h2>Liste des hôtels</h2>
              <span className="hotels-count">8 hôtels</span>
            </div>
            <button className="btn-create-hotel" onClick={() => setShowCreateModal(true)}>
              + Créer un nouvel hôtel
            </button>
          </div>

          <div className="hotels-grid">
            {hotels.map(hotel => (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.image} alt={hotel.nom} className="hotel-image"/>
                <div className="hotel-details">
                  <h3 className="hotel-name">{hotel.nom}</h3>
                  <p className="hotel-address">{hotel.adresse}</p>
                  <p className="hotel-price">{hotel.prix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Create Hotel */}
        {showCreateModal && (
          <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>CRÉER UN NOUVEAU HÔTEL</h2>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nom de l'hôtel</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="CAP Marianne" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Adresse</label>
                    <input 
                      type="text" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      placeholder="Les îles du saloum, Mar Lodj" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>E-mail</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="information@gmail.com" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Numéro de téléphone</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+221 77 777 77 77" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Prix par nuit</label>
                    <input 
                      type="text" 
                      name="price" 
                      value={formData.price} 
                      onChange={handleInputChange} 
                      placeholder="25.000 XOF" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Devise</label>
                    <select 
                      name="currency" 
                      value={formData.currency} 
                      onChange={handleInputChange}
                    >
                      <option value="F XOF">F XOF</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-full">
                  <label>Ajouter une photo</label>
                  <div className="image-upload-area" onClick={() => document.getElementById('image-upload').click()}>
                    <div className="upload-label">
                      <svg fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
                        <path d="M19.5 5.25c0-1.38-1.12-2.5-2.5-2.5H7c-1.38 0-2.5 1.12-2.5 2.5v13.5c0 1.38 1.12 2.5 2.5 2.5h10c1.38 0 2.5-1.12 2.5-2.5V5.25zM17 18.5H7V5.25h10v13.25zm-4-5.5c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1zm-4-4.5c.55 0 1-.45 1-1V5.25H8V9c0 .55.45 1 1 1z"/>
                      </svg>
                      <p>Ajouter une photo</p>
                    </div>
                    <input 
                      type="file" 
                      id="image-upload" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                      style={{ display: 'none' }} 
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn">Enregistrer</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}

export default HotelList;