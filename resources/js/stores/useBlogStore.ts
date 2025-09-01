import { BlogData, BlogList } from '@/types';
import { create } from 'zustand';

interface BlogState {
    // Blog List
    blogs: BlogList;
    setBlogs: (blogs: BlogList) => void;

    // Blog Detail
    selectedBlog: BlogData | null;
    setSelectedBlog: (blog: BlogData | null) => void;

    relatedBlogs: BlogData[];
    setRelatedBlogs: (blog: BlogData[]) => void;

    latestBlogs: BlogData[];
    setLatestBlogs: (latestBlogs: BlogData[]) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
    // Blog List
    blogs: {
        data: [],
        links: {
            first: '',
            last: '',
            next: '',
            prev: '',
        },
        meta: {
            current_page: 0,
            from: 0,
            last_page: 0,
            links: [{ url: '', label: '', active: false }],
            path: '',
            per_page: 0,
            to: 0,
            total: 0,
        },
    },
    setBlogs: (blogs: BlogList) => set({ blogs }),

    // Blog Detail
    selectedBlog: null,
    setSelectedBlog: (blog: BlogData | null) => set({ selectedBlog: blog }),

    relatedBlogs: [],
    setRelatedBlogs: (relatedBlogs: BlogData[]) => set({ relatedBlogs }),

    latestBlogs: [],
    setLatestBlogs: (latestBlogs: BlogData[]) => set({ latestBlogs }),
}));
