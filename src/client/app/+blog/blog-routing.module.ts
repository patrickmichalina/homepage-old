import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BlogComponent,
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'Blog'
          }
        }
      }
    ])
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
