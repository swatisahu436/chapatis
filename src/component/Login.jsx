import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${email}`);
    navigate('/');
  };

  const handleGoogleLogin = () => {
    alert('Logged in with Google');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login with Email</button>
        </form>
        <button onClick={handleGoogleLogin} style={{ ...styles.button, backgroundColor: '#db4437' }}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: '#f4f4f4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height:'40vh',
    fontSize:'24px',
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '600px',
  },
  input: {
    fontSize:'20px',
    width: '100%',
    padding: '1.5rem',
    margin: '0.5rem 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
 button: {
  width: '60%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.7rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  margin: '1rem auto',  // center the button itself
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
}
,
};

export default Login;
