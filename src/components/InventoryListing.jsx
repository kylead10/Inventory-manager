import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';

const InventoryListing = () => {
  const { user, logout } = useAuth();
  const [inventory, setInventory] = useState([]);

  // Assume you have a function to fetch the inventory data
  const fetchInventory = async () => {
    try {
      // Fetch inventory data from your API or database
      const response = await fetch('api/inventory');
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  useEffect(() => {
    // Fetch inventory data when the component mounts
    fetchInventory();
  }, []);

  return (
    <div>
      <h2>Welcome, {user?.email}!</h2>

      <h3>Inventory Listing</h3>
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

      <button>Add More Items</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default InventoryListing;
