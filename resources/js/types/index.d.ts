import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: ReactNode;
    href?: ReactNode | string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    roles: [{ name: string }];
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

// Input Props Start
export interface InputWithButtonProps {
    placeholder?: string;
    btnText?: ReactNode;
}

export interface InputWithLabelProps {
    label: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    placeholder: string;
    value?: string | number;
    onChange?: (e) => void;
    autoComplete: string;
    disabled?: boolean;
    className?: string;
}

export interface TextareaWithLabelProps {
    label: string;
    labelFor: string;
    id: string;
    name: string;
    placeholder: string;
    autoComplete: string;
    rows?: number;
    className?: string;
    value?: string | number;
    onChange?: (e) => void;
}
// Input Props End

// Select Props Start
export interface SelectWithLabelProps {
    label: string;
    labelFor: string;
    id: string;
    // name: string;
    // type: string;
    options: Country[] | State[] | City[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder: string;
    // autoComplete: string;
    // className?: string;
}
// Select Props End

// Address Form Input Start
export type AddressType = {
    id?: string;
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
};

export type Country = {
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: number;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symol: string;
    native: string;
    region: string;
    subregion: string;
    emoji: string;
    tld: string;
    latitude: string;
    longitude: string;
    hasStates: boolean;
};

export type State = {
    id: number;
    name: string;
    state_code: string;
    latitude: string;
    longitude: string;
    hasCities: boolean;
};

export type City = {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
};
// Address Form Input End

// Products Start
type IconKey = 'check' | 'money' | 'shield';

export type ProductData = {
    id: number;
    name: string;
    slug: string;
    thumbnail: string;
    price: number;
    old_price: number;
    information: string;
    dimensions: Record<string, string | number>;
    materials: Record<string, string | number>;
    shipping: string;
    sku: string;
    stock: number;
    is_visible: boolean;
    category: { name: string; slug: string };

    // Accessor
    discount_percentage?: number;
    is_new?: boolean;
};

export type ProductList = {
    current_page: number;
    data: ProductData[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: [{ url: string; label: string; active: boolean }];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
};
// Products End

// Category Start
export type Category = {
    id: number;
    name: string;
    slug: string;
    thumbnail: string;
    products_count: number;
};
// Category End

// Cart Item Start
export interface CartItem {
    id: number;
    thumbnail: string;
    name: string;
    slug: string;
    category: { name: string; slug: string };
    price: number;
    quantity: number;
}
// Cart Item End

// Blog Start
export type BlogData = {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    body: string;
    published_at: string;
};

export type BlogList = {
    current_page: number;
    data: BlogData[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: [{ url: string; label: string; active: boolean }];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
};
// Blog End

// Static Start
// Faq
export type Faq = {
    id: number;
    question: string;
    answer: string;
};
// Static End
