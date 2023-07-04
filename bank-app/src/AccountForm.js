import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccount } from './store';

const AccountForm = () => {
  const dispatch = useDispatch();
  const [customerName, setCustomerName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      id: Math.random(), // Generate a unique ID
      customerName,
      accountNumber,
      accountType
    };
    dispatch(addAccount(newAccount));
    setCustomerName('');
    setAccountNumber('');
    setAccountType('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-20 mb-4 w-80">
      <div>
        <label htmlFor="customerName">Customer Name:</label>
        <input 
        className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Username"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="accountNumber">Account Number:</label>
        <input
        className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Account Number"
          id="accountNumber"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="accountType">Account Type:</label>
        <input
        className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Account Type"
          id="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        />
      </div>
      <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline"  type="submit">Submit</button>
    </form>
  );
};

export default AccountForm;
