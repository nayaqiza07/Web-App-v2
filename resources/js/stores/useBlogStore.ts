import { Blog } from '@/types';
import { create } from 'zustand';

interface BlogState {
    // Blog List
    blogs: Blog[];
    setBlogs: (blogs: Blog[]) => void;

    // Blog Detail
    selectedBlog: Blog | null;
    setSelectedBlog: (blog: Blog | null) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
    // Blog List
    blogs: [],
    setBlogs: (blogs: Blog[]) => set({ blogs }),

    // Blog Detail
    selectedBlog: null,
    setSelectedBlog: (blog: Blog | null) => set({ selectedBlog: blog }),
}));
