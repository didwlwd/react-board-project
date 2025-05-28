import axios from 'axios';
import { data } from 'react-router-dom';
import { create } from 'zustand';

const usepostStore = create((set) => ({
  posts: {
    content: [],
    currentPage: '',
    totalPage: '',
    totalCount: '',
    hasNext: '',
    hasPrevious: '',
  },
  loading: false,
  error: null,

  post: {
    board_no: '',
    title: '',
    content: '',
    thumbnail: '',
    create_date: '',
    modify_date: '',
    views: '',
    likes: '',
    user_thumbnail: '',
    user_nikname: '',
  },

  replies: [],

  getPostList: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('http://localhost:8888/boards');
      set({ posts: response.data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  getPost: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`http://localhost:8888/boards/${id}`);
      set({ post: response.data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  writeBoard: async (id, data) => {
    const data1 = { ...data, id: id };
    set({ loading: true, error: null });

    try {
      await axios.post('http://localhost:8888/boards', data1);
      set({
        loading: false,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  //댓글

  getReply: async (boardNo) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`http://localhost:8888/reply/${boardNo}`);
      set({ replies: response.data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  writeReply: async (user_id, board_no, content) => {
    const data = { id: user_id, boardNo: board_no, content: content };
    set({ loading: true, error: null });
    try {
      await axios.post('http://localhost:8888/reply', data);
      set({ loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));

export default usepostStore;
