
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProperty from './components/AddProperty';
import PropertyList from './components/PropertyList';
import Home from './components/Home';
import Navbar from './components/Navbar';


const App = () => {
    const [token, setToken] = useState('');
    const [role, setRole] = useState('');

    const handleLogin = (token, role) => {
        setToken(token);
        setRole(role);
    };

    const handleLogout = () => {
        setToken('');
        setRole('');
    };

    return (
        <Router>
            <div>
                <Navbar token={token} role={role} handleLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login handleLogin={handleLogin} setToken={setToken}/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/property-list" element={<PropertyList token={token} />} />
                    
                    
                    <Route
                        path="/add-property"
                        element={
                            role === 'seller' ? (
                                <AddProperty  />
                            ) : (
                                <Navigate to="/login" state={{ from: '/add-property' }} />
                            )
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;








