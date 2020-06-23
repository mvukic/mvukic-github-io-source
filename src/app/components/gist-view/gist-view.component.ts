import { Component, Input } from '@angular/core';
import { Gist } from 'src/app/types/gist';

@Component({
  selector: 'gist-view',
  templateUrl: './gist-view.component.html',
  styleUrls: ['./gist-view.component.scss']
})
export class GistViewComponent {

  @Input()
  gist: Gist;

}
