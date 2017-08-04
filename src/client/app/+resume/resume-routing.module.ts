import { ResumeComponent } from './resume.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ResumeComponent,
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'Resume'
          }
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
