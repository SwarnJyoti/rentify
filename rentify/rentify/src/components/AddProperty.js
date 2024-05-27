import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    rent: '',
    seller: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/properties', formData);
      console.log('Property added successfully!');
      setSuccessMessage('Property added successfully! Redirecting to property list...');
      setTimeout(() => {
        navigate('/property-list'); // Redirect to property list
      }, 3000);
    } catch (error) {
      console.error('Error adding property:', error);
      // Handle error - display error message to user or log it
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ADD PROPERTY</h2>
      <div style={styles.formBox}>
        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Bedrooms:</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="Enter number of bedrooms"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Bathrooms:</label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              placeholder="Enter number of bathrooms"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Rent:</label>
            <input
              type="number"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
              placeholder="Enter rent"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Seller:</label>
            <input
              type="text"
              name="seller"
              value={formData.seller}
              onChange={handleChange}
              placeholder="Enter seller's name"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Add Property</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  title: {
    textAlign: 'center',
    color: '#009900',
    marginBottom: '20px',
  },
  formBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
    marginRight:'15px'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '50%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    marginLeft: '25%',
  },
  successMessage: {
    textAlign: 'center',
    color: '#009900',
    marginBottom: '20px',
  },
};

export default AddProperty;
