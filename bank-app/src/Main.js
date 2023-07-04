import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  deleteAccount } from './store';
import AccountForm from './AccountForm';
const Main = () => {
  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  const handleDelete = (accountId) => {
    dispatch(deleteAccount(accountId));
  };
  console.log(accounts)
  console.log(accounts)
  console.log(accounts)
  console.log(accounts)

  return (
    <div className="p-4 flex-grow">
      {/* Table code */}
      <table className="w-full border-collapse">
        {/* Table headers */}
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id} className="bg-white border-b">
              <td className="py-2 px-4">{account.id}</td>
              <td className="py-2 px-4">{account.customerName}</td>
              <td className="py-2 px-4">{account.accountNumber}</td>
              <td className="py-2 px-4">{account.accountType}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleDelete(account.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AccountForm />
    </div>
  );
};

export default Main;
