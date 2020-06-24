import { Component } from '@angular/core';
import { user } from './data/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user = user;
  panel: 'projects' | 'gists' = 'projects';

  showPanel(panel: 'projects' | 'gists') {
    this.panel = panel;
  }

}
