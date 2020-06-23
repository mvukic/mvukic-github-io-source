export enum ProjectStatus {
  DONE = 'Done',
  INPROGRESS = 'In progress',
  ARCHIVED = 'Archived',
  MAINTENANCE = 'Maintenance'
}

export interface ProjectBadge {
  type: string;
  status: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  status: ProjectStatus;
  hasReadme: boolean;
  readmeURL: string;
  technologies: string[];
  badges: ProjectBadge[];
}
