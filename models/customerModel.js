const mongoose = require('mongoose');

// name: A required string representing the name of the customer.
// contactDetails: A required string representing the contact details of the customer.
// outstandingBalance: A number representing the outstanding balance of the customer. It has a default value of 0.
// transactionHistory: An array of Transaction object references. It stores the transaction history of the customer.
const customerSchema = new mongoose.Schema({
  //Write a customer Model here
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
