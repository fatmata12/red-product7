import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  // login | forgot | register
  const [mode, setMode] = useState('login');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  const handleForgot = (e) => {
    e.preventDefault();
    alert('Lien envoyé par e-mail 📩');
    setMode('login');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Inscription réussie ✅');
    setMode('login');
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <span className="logo-icon">▲</span>
        <span className="logo-text">RED PRODUCT</span>
      </div>

      <div className="login-card">
        {/* ===== LOGIN ===== */}
        {mode === 'login' && (
          <>
            <p className="login-subtitle">Connectez-vous en tant que Admin</p>

            <form className="login-form" onSubmit={handleLogin}>
              <input className="input-field" placeholder="E-mail" />
              <input
                className="input-field"
                type="password"
                placeholder="Mot de passe"
              />

              <div className="checkbox-container">
                <input type="checkbox" />
                <label>Gardez-moi connecté</label>
              </div>

              <button className="login-button">Se connecter</button>
            </form>
          </>
        )}

        {/* ===== FORGOT ===== */}
        {mode === 'forgot' && (
          <>
            <p className="login-subtitle">Mot de passe oublié</p>

            <form className="login-form" onSubmit={handleForgot}>
              <input
                className="input-field"
                type="email"
                placeholder="Entrez votre e-mail"
                required
              />

              <button className="login-button">Envoyer le lien</button>
            </form>
          </>
        )}

        {/* ===== REGISTER ===== */}
        {mode === 'register' && (
          <>
            <p className="login-subtitle">Inscrivez-vous en tant que Admin</p>

            <form className="login-form" onSubmit={handleRegister}>
              <input className="input-field" placeholder="Nom" />
              <input className="input-field" placeholder="E-mail" />
              <input
                className="input-field"
                type="password"
                placeholder="Mot de passe"
              />

              <div className="checkbox-container">
                <input type="checkbox" required />
                <label>Accepter les termes et la politique</label>
              </div>

              <button className="login-button">S'inscrire</button>
            </form>
          </>
        )}
      </div>

      <div className="footer-links">
        {mode === 'login' && (
          <>
            <span className="yellow-link" onClick={() => setMode('forgot')}>
              Mot de passe oublié ?
            </span>

            <p>
              Vous n'avez pas de compte ?{' '}
              <span className="yellow-link" onClick={() => setMode('register')}>
                S'inscrire
              </span>
            </p>
          </>
        )}

        {(mode === 'forgot' || mode === 'register') && (
          <span className="yellow-link" onClick={() => setMode('login')}>
            Se connecter
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;