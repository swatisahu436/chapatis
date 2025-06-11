import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Correct Hook

const Header = () => {
  const navigate = useNavigate(); // ✅ Use this

  return (
    <div id="main">
      <div id="header">
        <h1>Grains Wraps</h1>
        <div id="menu">
          <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/order')}>Order</li>
            <li onClick={() => navigate('/story')}>AboutUs</li>
            <li onClick={() => navigate('/login')}>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
