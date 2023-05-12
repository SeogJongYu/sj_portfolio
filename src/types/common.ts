export interface ProjectInfo {
  id: number;
  title: string;
  project_name: string;
  summary: string;
  stacks: string[];
  thumbnail: string;
  images?: string[];
  intro_summary: string;
  intros?: string[];
  date_range?: string;
  positions?: string[];
  languages?: string[];
  front_stacks?: string[];
  back_stacks?: string[];
  stylings?: string[];
  bundlers?: string[];
  distributions?: string[];
  state_manages?: string[]; // 상태관리 리스트
  collaboration_tools?: string[]; // 협업툴
  dbs?: string[]; // 데이터베이스
  purposes: string[]; // 목표 리스트
  learing_summary?: string; // 러닝포인트 요약
  learnings?: string[]; // 러닝포인트 리스트
  website_link?: string;
  requireds?: string[];
}
