import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from '../../Servises/api';
import axios from 'axios';

const getContacts = createAsyncThunk('contacts/getContactsStatus', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk(
  'contacts/addContactStatus',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {}
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContactStatus',
  async id => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {}
  },
);

export { getContacts, addContact, deleteContact };
