import { Component, Input } from '@angular/core';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent {

  @Input()
  project: Project;

  constructor() { }

  get hasBadges(): boolean {
    return this.project.badges.length > 0;
  }

  get hasTechnologies(): boolean {
    return this.project.technologies.length > 0;
  }

  get hasReadme(): boolean {
    return this.project.hasReadme;
  }

}
