import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ProjectsRoutingModule, SharedModule],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  providers: [ProjectsService]
})
export class ProjectsModule { }
