import { create } from 'zustand';
import axios from 'axios';
import { useState } from 'react';

const UserStore = create((set) => ({
  users: [],

  getUsers: async () => {
    const response = await axios.get('http://localhost:3001/users');
    set({ users: response.data });
  },

  checkUser: async (user) => {
    const [use, setUser] = useState('');
    const response = await axios.get('http://localhost:3001/users');
  },
}));

export default UserStore;
