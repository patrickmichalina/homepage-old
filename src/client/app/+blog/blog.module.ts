import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [BlogRoutingModule, SharedModule],
  declarations: [BlogComponent],
  exports: [BlogComponent]
})
export class BlogModule { }
