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
    avatar?: string;
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
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
}
// Input Props End

// Select Props Start
export interface SelectWithLabelProps {
    label: string;
    labelFor: string;
    id: string;
    // name: string;
    // type: string;
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder: string;
    // autoComplete: string;
    // className?: string;
}
// Select Props End
