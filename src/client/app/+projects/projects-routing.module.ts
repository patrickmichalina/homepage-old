import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent,
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'Projects'
          }
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
