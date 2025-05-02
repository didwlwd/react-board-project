import axios from 'axios';
import { create } from 'zustand';

const usepostStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,

  getPost: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('http://localhost:3001/posts');
      set({ posts: response.data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));

export default usepostStore;
