import { Component } from '@angular/core';
import { gists } from 'src/app/data/user';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.scss']
})
export class GistsComponent {

  gists = gists;

}
