export interface ProjectInfo {
  id: number;
  title: string;
  project_name: string;
  summary: string;
  stacks: string[];
  thumbnail: string;
  images: string[];
  intro: string;
  intro_list?: string[];
  date_range?: string;
  position?: string[];
  language?: string[];
  styling?: string[];
  bundler?: string[];
  distribution?: string[];
  state_manage?: string[];
  collaboration_tool?: string[];
  purpose: string;
  purpose_list: string[];
  learing_summary?: string;
  learning_list?: string[];
  website_link?: string;
  required_list?: string[];
}
