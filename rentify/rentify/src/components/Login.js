import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
    const [form, setForm] = useState({
        email: '',
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
        axios.post('http://localhost:5000/api/users/login', form)
            .then(response => {
                handleLogin(response.data.token, response.data.role);
                if (response.data.role === 'seller') {
                    navigate('/add-property');
                } else {
                    navigate('/property-list');
                }
            })
            .catch(error => {
                console.error('There was an error logging in!', error);
                setError('Login failed. Please try again.');
            });
    };

    const inputStyles = {
        width: '100%', 
        padding: '10px',
        fontSize: '16px', 
        borderRadius: '5px',
        border: '1px solid #ccc'
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2 style={styles.heading}>Login</h2>
                {error && <p style={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" style={inputStyles} />
                    </div>
                    <div style={styles.formGroup}>
                        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" style={inputStyles} />
                    </div>
                    <div style={styles.formGroup}>
                        <select name="role" value={form.role} onChange={handleChange} style={inputStyles}>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                    <Link to="/register" style={styles.signupLink}>Don't have an account? Sign up</Link>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#A0DEFF'
    },
    box: {
        width: '400px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#fff'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    formGroup: {
        marginBottom: '20px',
        marginRight:'20px'
    },
    button: {
        width: '100%',
        padding: '12px', 
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    signupLink: {
        display: 'block',
        textAlign: 'center',
        marginTop: '10px',
        color: '#007bff',
        textDecoration: 'none'
    },
    error: {
        color: 'red',
        marginBottom: '15px',
        textAlign: 'center'
    }
};

export default Login;












































