import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResumeService } from './resume.service';

@Component({
  selector: 'pm-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent {
  resume$ = this.rs.resume$;
  constructor(private rs: ResumeService) { }
}
