import { ProjectsService } from './projects.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pm-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  constructor(public ps: ProjectsService) {}
}
