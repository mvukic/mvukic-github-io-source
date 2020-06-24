import { ProjectStatus, ProjectBadge, Project } from '../types/project';
import { User } from '../types/user';

export interface CrateProject {
  name: string;
  displayName: string;
  description: string;
  status: ProjectStatus;
  hasReadme?: boolean;
  technologies?: string[];
  badges?: ProjectBadge[];
}

export function createProject(user: User, project: CrateProject): Project {
  const projectURL = `${user.url}/${project.name}`;
  const projectReadmeURL = project.hasReadme ? `${projectURL}#readme` : undefined;
  return {
    name: project.name,
    description: project.description,
    displayName: project.displayName,
    url: projectURL,
    status: project.status,
    hasReadme: project.hasReadme,
    readmeURL: projectReadmeURL,
    badges: project.badges ?? [],
    technologies: project.technologies ?? [],
  };
}
