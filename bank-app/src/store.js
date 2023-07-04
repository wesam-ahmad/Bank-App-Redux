import { createStore, applyMiddleware } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Step 1: Define the initial state
const initialState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings"
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts"
    }
  ],
  numberOfAccounts: 2
};
// Step 2: Define action types
const ADD_ACCOUNT = 'ADD_ACCOUNT';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

// Step 3: Define async action using createAsyncThunk
const fetchAccountData = createAsyncThunk(
  'accounts/fetchAccountData',
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return data;

  }
  
);

// Step 4: Define action creators
const addAccount = (account) => {
  return {
    type: ADD_ACCOUNT,
    payload: account
  };
};

const deleteAccount = (accountId) => {
  return {
    type: DELETE_ACCOUNT,
    payload: accountId
  };
};

// Step 5: Define the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        numberOfAccounts: state.numberOfAccounts + 1
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter((account) => account.id !== action.payload),
        numberOfAccounts: state.numberOfAccounts - 1
      };
    default:
      return state;
  }
};

// Step 6: Create the Redux store
const store = createStore(reducer, applyMiddleware(thunk));

export { fetchAccountData, addAccount, deleteAccount, store };
