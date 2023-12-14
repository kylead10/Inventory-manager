import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateInventory = () => {
  const [item, setItem] = useState({
    name: '',
    totalStock: '',
    price: '',
    description: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for creating inventory item here
    console.log('Inventory item created:', item);
    // Reset the form after submission
    setItem({
      name: '',
      totalStock: '',
      price: '',
      description: '',
    });
  };

  return (
    <div>
      <h2>Create Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Enter item name'
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Total Stock:</label>
          <input
            type='number'
            name='totalStock'
            placeholder='Enter total stock'
            value={item.totalStock}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type='number'
            name='price'
            placeholder='Enter price'
            value={item.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name='description'
            placeholder='Enter item description'
            value={item.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Create Item</button>
      </form>
      <button onClick={() => navigate('/inventory')}>
        Back to Inventory Listing
      </button>
    </div>
  );
};

export default CreateInventory;
