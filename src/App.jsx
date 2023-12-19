import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import InventoryListing from './components/InventoryListing';
import CreateInventory from './components/CreateInventory';
import EditInventory from './components/EditInventory';
import DeleteInventory from './components/DeleteInventory';
import { InventoryProvider } from './components/InventoryContext';

function App() {
  return (
    <InventoryProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/inventory' element={<InventoryListing />} />
          <Route path='/create' element={<CreateInventory />} />
          <Route path='/edit/:itemId' element={<EditInventory />} />
          <Route path='/delete/:itemId' element={<DeleteInventory />} />
        </Routes>
      </Router>
    </InventoryProvider>
  );
}

export default App;
