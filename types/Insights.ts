export interface Post {
    title: string;
    desc: string;
    img?: string;
    link?: string;
    category?: string;
    readTime?: string;
    date: string;
}
export interface Project {
    title: string;
    desc: string;
    img?: string;
    link?: string;
    category?: string;
    tech?: string[];
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
    projects: Project[];
    events: Event[];
    others: Other[];
}
export interface FaqItem {
    question: string;
    answer: string;
}