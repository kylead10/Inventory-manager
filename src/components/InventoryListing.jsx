// InventoryList.js
import React from 'react';
import { useAuth } from './AuthContext';

const InventoryListing = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user?.email}!</h2>
      <button onClick={logout}>Logout</button>
      {/* Display your inventory list here */}
    </div>
  );
};

export default InventoryListing;
