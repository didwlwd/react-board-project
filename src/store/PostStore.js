import axios from 'axios';
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

  getPost: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('http://localhost:8888/boards');
      set({ posts: response.data, loading: false });
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
}));

export default usepostStore;
