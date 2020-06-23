import { Component } from '@angular/core';
import { categories } from 'src/app/data/user';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  categories = categories;

}
