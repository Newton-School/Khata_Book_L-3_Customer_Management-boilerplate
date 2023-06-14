const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel');

const newCustomer = async (req, res) => {
  try {
    //Write a code here
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    //Write a code here
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  newCustomer,
  getAllCustomers,
};
