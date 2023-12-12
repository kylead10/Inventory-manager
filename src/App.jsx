import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import InventoryListing from './components/InventoryListing';
import CreateInventory from './components/CreateInventory';
import EditInventory from './components/EditInventory';
import DeleteInventory from './components/DeleteInventory';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={Login} />
          <Route path='/inventory' element={InventoryListing} />
          <Route path='/create' element={CreateInventory} />
          <Route path='/edit/:itemId' element={EditInventory} />
          <Route path='/delete/:itemId' element={DeleteInventory} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
