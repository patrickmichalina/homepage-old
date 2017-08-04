import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pm-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent { }
