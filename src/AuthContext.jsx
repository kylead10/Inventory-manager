import React, { createContext, useContext, useState } from 'react';

const AuthContext = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Email Required';
  }
  if (!values.password) errors.password = 'Password Required';
};
