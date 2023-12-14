import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  const addItemToInventory = (item) => {
    setInventory([...inventory, item]);
  };

  return (
    <InventoryContext.Provider value={{ inventory, addItemToInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  return useContext(InventoryContext);
};
