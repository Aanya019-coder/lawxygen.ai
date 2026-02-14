import { ReactNode } from 'react';

export interface Feature {
    title: string;
    description: string;
    icon: ReactNode;
    bgPattern?: ReactNode;
}

export interface Message {
    role: 'user' | 'assistant';
    content: string;
}
