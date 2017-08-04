import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ResumeService } from './resume.service';
import { ObjectKeysPipe } from './keys.pipe';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ResumeRoutingModule, SharedModule],
  declarations: [ResumeComponent, ObjectKeysPipe],
  exports: [ResumeComponent],
  providers: [ResumeService]
})
export class ResumeModule { }
