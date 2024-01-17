import { create } from "zustand";

const appStore = create((set, get) => ({
  post: null,
  setPost: (value) => set({ post: value }),

  filter: "All",
  setFilter: (value) => set({ filter: value }),
}));

export default appStore;
