import { DeveloperProject } from "./works";

export interface Post {
    title: string;
    desc: string;
    img?: string;
    link?: string;
    category?: string;
    readTime?: string;
    date: string;
}

export interface Event {
    title: string;
    desc: string;
    img?: string;
    link?: string;
    date: string;
}
export interface Other {
    title: string;
    desc: string;
    img?: string;
    link?: string;
    date: string;
}
export interface InsightsData {
    posts: Post[];
    projects: DeveloperProject[];
    events: Event[];
    others: Other[];
}
export interface FaqItem {
    question: string;
    answer: string;
}