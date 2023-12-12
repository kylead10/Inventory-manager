import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import InventoryListing from './components/InventoryListing';
import CreateInventory from './components/CreateInventory';
import EditInventory from './components/EditInventory';
import DeleteInventory from './components/DeleteInventory';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/inventory' component={InventoryListing} />
        <Route path='/create' component={CreateInventory} />
        <Route path='/edit/:itemId' component={EditInventory} />
        <Route path='/delete/:itemId' component={DeleteInventory} />
      </Switch>
    </Router>
  );
}

export default App;
