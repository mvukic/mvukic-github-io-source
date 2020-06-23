import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { GistViewComponent } from './components/gist-view/gist-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { ProjectsComponent } from './components/projects/projects.component';
import { GistsComponent } from './components/gists/gists.component';
import { MatTabsModule } from '@angular/material/tabs';

const material = [
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatTabsModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectViewComponent,
    GistViewComponent,
    ProjectsComponent,
    GistsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...material,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
