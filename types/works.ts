export interface TeamMember {
    name: string;
    role: string;
    responsibilities: string;
}

export interface Images {
    thumbnail: string;
    screenshots: string[];
}

export interface Links {
    live: string;
    source: string;
    demoVideo: string;
}

export interface AdditionalInfo {
    demoMode: boolean;
    documentationLink: string;
    blogPost: string;
}

export interface DeveloperProject {
    title: string;
    slug: string;
    description: string;
    detailedDescription: string;
    category: string;
    status: string;
    technologies: string[];
    images: Images;
    links: Links;
    releaseDate: string;
    lastUpdated: string;
    duration: string;
    role: string;
    features: string[];
    challenges: string[];
    team: TeamMember[];
    additionalInfo: AdditionalInfo;
    featured?: boolean;
}
