import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from '../../Servises/api';
import axios from 'axios';
import { authSelectors } from '../auth';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const getContacts = createAsyncThunk(
  'contacts/getContactsStatus',
  async (_, thunkAPI) => {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // console.log(isLoggedIn);
    // if (isLoggedIn === null) return;
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error(`${'Error, please repeat the request'}`);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContactStatus',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      toast.error(`${'Error, please repeat the request'}`);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContactStatus',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      toast.error(`${'Error, please repeat the request'}`);
    }
  },
);

export { getContacts, addContact, deleteContact };
