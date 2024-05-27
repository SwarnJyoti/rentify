import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propertyImage1 from '../Images/Image1.jpg';
import propertyImage2 from '../Images/Image2.jpg';
import propertyImage3 from '../Images/Image3.jpg';
import propertyImage4 from '../Images/Image4.jpg';
import propertyImage5 from '../Images/Image5.jpg';
import propertyImage6 from '../Images/Image6.jpg';

const PropertyList = ({ token }) => {
    const [properties, setProperties] = useState([]);
    const [searchLocation, setSearchLocation] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/properties', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch properties!', error);
            });
    }, [token]);

    const handleInterested = (property) => {
        alert(`
            Title: ${property.title}
            Description: ${property.description}
            Location: ${property.location}
            Bedrooms: ${property.bedrooms}
            Bathrooms: ${property.bathrooms}
            Rent: ${property.rent}
            Seller:${property.seller}
        `);
    };
    
    const filteredProperties = properties.filter(property =>
        property.location.toLowerCase().includes(searchLocation.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', color: '#fff' }}>Property List</h2>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <input
                    type="text"
                    placeholder="Search by location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    style={{ width: '60%', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
                />
                <button style={{ padding: '8px 16px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {filteredProperties.map((property, index) => (
                    <div key={property.id} style={{ width: '30%', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                        <img src={index === 0 ? propertyImage1 : index === 1 ? propertyImage2 : index === 2 ? propertyImage3 : index === 3 ? propertyImage4 : index === 4 ? propertyImage5 : propertyImage6} alt="Property" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '10px' }} />
                        <h3>{property.title}</h3>
                        <p style={{ marginBottom: '10px' }}>Location: {property.location}</p>
                        <button style={{ width: '100%', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => handleInterested(property)}>I'm interested</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyList;




















































