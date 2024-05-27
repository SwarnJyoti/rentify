import React from 'react';
import { Link } from 'react-router-dom';


import Image9 from '../Images/Image9.jpg';

const Home = () => (
  <div style={styles.container}>
    <div style={styles.content}>
      <h1 style={styles.heading}>Rentify - Where Renting Meets Simplicity</h1>
      <p style={styles.paragraph}>Welcome to Rentify, your one-stop solution for all your renting needs. Whether you're looking for a new home, managing your properties, or searching for tenants, Rentify has you covered.</p>
      <p style={styles.paragraph}>Join Rentify today and experience hassle-free renting like never before!</p>
    </div>
    <Link to="/login">
      <button style={styles.button}>Get Started</button>
    </Link>
  </div>
);

const styles = {
  container: {
    width: '100vw',
    height: '100vh', 
    background: `url(${Image9})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px', 
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: '10px', 
    backdropFilter: 'blur(5px)', 
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '10px',
    color: 'Blue', 
  },
  paragraph: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '20px',
    color: 'black', 
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
