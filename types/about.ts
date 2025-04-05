
export interface About {
    personal_info: PersonalInfo;
    professional_summary: ProfessionalSummary;
    education: Education;
    certifications: Certification[];
    work_experience: WorkExperience[];
    technical_contributions: TechnicalContributions;
    blogging_and_content: BloggingAndContent;
    open_source_and_community: OpenSourceAndCommunity;
    social_media_and_networks: SocialMediaAndNetworks;
    personal_philosophy: PersonalPhilosophy;
    personal_interests: PersonalInterests;
    additional_details: AdditionalDetails;
    contact_information: ContactInformation;
  }
  

  export interface PersonalInfo {
    full_name: string;
    aliases: string[];
    title: string;
    profile_summary: string;
    location: string;
    languages: string[];
  }
  
  
  export interface ProfessionalSummary {
    current_position: string;
    description: string;
    key_strengths: string[];
    years_of_experience: number;
  }
  

  export interface Education {
    degree: string;
    university: string;
    details: string;
    graduation_year: number;
    additional_courses: AdditionalCourse[];
  }
  
  export interface AdditionalCourse {
    name: string;
    provider: string;
    year: number;
  }
  

  export interface Certification {
    name: string;
    issuer: string;
    year: number;
    description: string;
  }
  
 
  export interface WorkExperience {
    company: string;
    role: string;
    duration: string;
    responsibilities: string[];
    achievements: string[];
  }
  

  export interface TechnicalContributions {
    apps: App[];
    github_repositories: GithubRepository[];
  }
  
  export interface App {
    name: string;
    description: string;
    technologies: string[];
    platform?: string;
    installs?: string;
    rating?: string;
    repository: string;
    last_updated: string;
    awards?: string[];
    status?: string;
  }
  
  export interface GithubRepository {
    name: string;
    description: string;
    language: string;
    stars: number;
    license: string;
    last_updated: string;
  }
  

  export interface BloggingAndContent {
    platforms: BlogPlatform[];
  }
  
  export interface BlogPlatform {
    name: string;
    url: string;
    topics: string[];
    recent_activity: string;
    post_count?: number;
    followers?: number;
  }
  

  export interface OpenSourceAndCommunity {
    open_source_contributions: OpenSourceContributions;
    community_involvement: CommunityInvolvement;
  }
  
  export interface OpenSourceContributions {
    organization: string;
    github_url: string;
    role: string;
    mission: string;
    contributions: string[];
  }
  
  export interface CommunityInvolvement {
    roles: string[];
    activities: string[];
    awards: string[];
  }
  

  export interface SocialMediaAndNetworks {
    linkedin: string;
    twitter_x: string;
    instagram: string;
    kaggle: string;
    google_play: string;
    stackoverflow: string;
    medium: string;
  }
  

  export interface PersonalPhilosophy {
    mission_statement: string;
    core_values: string[];
    vision: string;
  }
  

  export interface PersonalInterests {
    hobbies: string[];
    favorite_books: string[];
    side_projects: SideProject[];
  }
  
  export interface SideProject {
    name: string;
    description: string;
    status: string;
  }
  
 
  export interface AdditionalDetails {
    aliases_and_usernames: AliasesAndUsernames;
    timeline: { [year: string]: string };
    metadata: Metadata;
  }
  
  export interface AliasesAndUsernames {
    github: string;
    linkedin: string;
    twitter: string;
    kaggle: string;
  }
  
  export interface Metadata {
    last_updated: string;
    version: string;
  }
  

  export interface ContactInformation {
    email: string;
    phone: string;
    website: string;
    contact_form: string;
  }
  