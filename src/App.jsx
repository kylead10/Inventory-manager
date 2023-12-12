import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import InventoryListing from './components/InventoryListing';
import CreateInventory from './components/CreateInventory';
import EditInventory from './components/EditInventory';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/' component={InventoryListing} />
        <PrivateRoute path='/create' component={CreateInventory} />
        <PrivateRoute path='/edit/:id' component={EditInventory} />
      </Switch>
    </Router>
  );
}

export default App;
