import { create } from 'zustand';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBedPulse } from 'react-icons/fa6';

const UserStore = create((set, get) => ({
  users: [],
  error: null,
  loginState: false,

  userState: {
    id: '',
    userNikName: '',
    userName: '',
    email: '',
    userThumbnail: '',
    status: '',
  },

  resetError: () => {
    set({ error: null });
  },

  getUser: async (id) => {
    const response = await axios.get(`http://localhost:8888/users/${id}`);
    const user = response.data;
    set({
      userState: {
        id: user.id,
        userNikName: user.user_nikname,
        userName: user.user_name,
        email: user.email,
        userThumbnail: user.user_thumbnail,
        status: user.status,
      },
    });
  },

  checkUser: async (data) => {
    try {
      const response = await axios.post(`http://localhost:8888/users/login`, data);
      const user = response.data;

      set({ users: response.data });
      set({
        userState: {
          id: user.id,
          userNikName: user.user_nikname,
          userName: user.user_name,
          email: user.email,
          userThumbnail: user.user_thumbnail,
          status: user.status,
        },
      });
      set({ loginState: true, error: null });
      return true;
    } catch (error) {
      set({ loginState: false });

      if (error.response) {
        const status = error.response.status;

        if (status === 400) {
          set({ error: '존재하지 않는 회원입니다.' });
        } else if (status === 401) {
          set({ error: '비밀번호가 일치하지 않습니다.' });
        } else if (status === 403) {
          set({ error: '탈퇴된 회원입니다.' });
        } else {
          set({ error: '서버 오류가 발생했습니다.' });
        }
      } else {
        set({ error: '네트워크 오류' });
      }
      return false;
    }
  },

  logOut: () => {
    set({
      users: [],
      userState: {
        id: '',
        userNikName: '',
        userName: '',
        email: '',
        userThumbnail: '',
        status: '',
      },
      loginState: false,
    });
  },

  updateUser: async (formData) => {
    try {
      const response = await axios.patch(`http://localhost:8888/users/update`, formData);
      set((state) => ({
        users: state.users.map((user) => (user.id === id ? { ...user, ...response.data } : user)),
      }));
      set({ userState: { ...state.userState, ...response.data } });
    } catch (error) {
      set({ error: error.message });
    }
  },

  deleteUser: async (formData) => {
    try {
      await axios.patch(`http://localhost:8888/users/delete`, formData);

      set({
        users: [],
        loginState: false,
        userState: {
          id: '',
          userNikName: '',
          userName: '',
          email: '',
          userThumbnail: '',
          status: '',
        },
      });
    } catch (error) {
      set({ loginState: false, error: error.message });
    }
  },

  enrollUser: async (formData) => {
    try {
      await axios.post(`http://localhost:8888/users`, formData);

      return true;
    } catch (error) {
      set({ error: error.message });
      return false;
    }
  },
}));

export default UserStore;
