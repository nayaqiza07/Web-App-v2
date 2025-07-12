import { BlogData, BlogList } from '@/types';
import { create } from 'zustand';

interface BlogState {
    // Blog List
    blogs: BlogList;
    setBlogs: (blogs: BlogList) => void;

    // Blog Detail
    selectedBlog: BlogData | null;
    setSelectedBlog: (blog: BlogData | null) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
    // Blog List
    blogs: {
        current_page: 0,
        data: [],
        first_page_url: '',
        from: 0,
        last_page: 0,
        last_page_url: '',
        links: [{ url: '', label: '', active: false }],
        next_page_url: '',
        path: '',
        per_page: 0,
        prev_page_url: '',
        to: 0,
        total: 0,
    },
    setBlogs: (blogs: BlogList) => set({ blogs }),

    // Blog Detail
    selectedBlog: null,
    setSelectedBlog: (blog: BlogData | null) => set({ selectedBlog: blog }),
}));
