import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: 'buyer'
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users/register', form)
            .then(response => {
                console.log('Registered successfully!', response.data);
                setForm({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                    role: 'buyer'
                });
                setError('');
                
                alert('Registered successfully! Please log in.');
                navigate('/login');
            })
            .catch(error => {
                console.error('There was an error registering!', error);
                setError('Registration failed. Please try again.');
            });
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Register</h2>
                {error && <p style={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>First Name:</label>
                        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Last Name:</label>
                        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email:</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Phone Number:</label>
                        <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password:</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Role:</label>
                        <select name="role" value={form.role} onChange={handleChange} style={styles.input}>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    <button type="submit" style={styles.button}>Register</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    page: {
        backgroundColor: '#A0DEFF',
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        maxWidth: '400px',
        padding: '50px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
        marginRight:'20px'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    inputGroup: {
        marginBottom: '15px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    button: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    error: {
        color: 'red',
        marginBottom: '15px'
    }
};

export default Register;

