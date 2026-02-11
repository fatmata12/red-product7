import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import Login from './Login';
import Dashboard from './Dashboard';
import HotelList from './HotelList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogin = (loginStatus) => {
    setIsLoggedIn(loginStatus);
    if (loginStatus) {
      localStorage.setItem('isLoggedIn', 'true');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setIsLoggedIn={handleLogin} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/hotels"
          element={
            isLoggedIn ? (
              <HotelList handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;