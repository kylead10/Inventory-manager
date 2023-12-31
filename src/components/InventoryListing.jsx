import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { useInventory } from './InventoryContext';
import './InventoryListingStyle.css';

const InventoryListing = () => {
  const { user, logout } = useAuth();
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  // Assume you have a function to fetch the inventory data
  // const fetchInventory = async () => {
  //   try {
  //     // Fetch inventory data from your API or database
  //     const response = await fetch('api/inventory');
  //     const data = await response.json();
  //     setInventory(data);
  //   } catch (error) {
  //     console.error('Error fetching inventory:', error);
  //   }
  // };

  useEffect(() => {
    // Fetch inventory data when the component mounts
    fetchInventory();
  }, [fetchInventory]);

  const handleLogout = () => {
    logout();
    // Navigate to the login page
    navigate('/');
  };

  return (
    <div className='listing_inventory'>
      <h4 className='header'>Welcome, </h4>
      <h2 className='user'>{user?.email}</h2>
      <h3>INVENTORY LISTING</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Price</th>
            <th>Total Stock</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.totalStock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='add' onClick={() => navigate('/create')}>
        Create new item
      </button>
      <button className='logout' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InventoryListing;
