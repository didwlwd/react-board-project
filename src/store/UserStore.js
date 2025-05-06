import { create } from 'zustand';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserStore = create((set, get) => ({
  users: [],
  error: null,
  loginState: false,

  userState: {
    id: '',
    userId: '',
    password: '',
    userNikName: '',
    userName: '',
    email: '',
    userThumbnail: '',
  },

  getUsers: async () => {
    const response = await axios.get('http://localhost:3001/users');
    set({ users: response.data });
  },

  checkUser: (users, formData) => {
    const user = users.find((use) => use.userId === formData.userId);

    if (user && user.password === formData.password) {
      set({
        userState: {
          id: user.id,
          userId: user.userId,
          password: user.password,
          userNikName: user.userNikName,
          userName: user.userName,
          email: user.email,
          userThumbnail: user.userThumbnail,
        },
      });
      set({ loginState: true });
      return true;
    } else {
      set({ loginState: false });
      return false;
    }
  },

  logOut: () => {
    set({
      userState: {
        id: '',
        userId: '',
        password: '',
        userNikName: '',
        userName: '',
        email: '',
        userThumbnail: '',
      },
      loginState: false,
    });
  },

  updateUser: async (id, formData) => {
    try {
      const response = await axios.patch(`http://localhost:3001/users/${id}`, formData);
      set((state) => ({
        users: state.users.map((user) => (user.id === id ? { ...user, ...response.data } : user)),
      }));
      set({ userState: { ...state.userState, ...response.data } });
    } catch (error) {
      set({ error: error.message });
    }
  },

  deleteUser: async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);

      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
        loginState: false,
        userState: {
          id: '',
          userId: '',
          password: '',
          userNikName: '',
          userName: '',
          email: '',
          userThumbnail: '',
        },
      }));
    } catch (error) {
      set({ loginState: false, error: error.message });
    }
  },

  enrollUser: async (users, formData) => {
    const newId = users.length + 1;
    const newuser = { ...formData, id: newId };
    try {
      const response = await axios.post(`http://localhost:3001/users`, newuser);
      set({
        users: response.data,
        userState: {
          id: newuser.id,
          userId: newuser.userId,
          password: newuser.password,
          userNikName: newuser.userNikName,
          userName: newuser.userName,
          email: newuser.email,
          userThumbnail: newuser.userThumbnail,
        },
        loginState: true,
      });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export default UserStore;
