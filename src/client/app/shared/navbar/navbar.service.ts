import { EnvironmentService } from './../services/environment.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export interface INavbarService {
  menu$: Observable<any[]>;
}

@Injectable()
export class NavbarService implements INavbarService {
  menu$ = Observable.of([
    { route: '', name: 'About' },
    // { route: 'about', name: 'About' },
    { route: 'projects', name: 'Projects' },
    { route: 'resume', name: 'Resume' }
    // { route: 'blog', name: 'Blog' }
  ]);

  pic = `${this.env.config.endpoints.cdn}/assets/images/profile.jpg`;

  social$ = Observable.of([
    {
      icon: 'fa fa-linkedin-square ',
      href: 'https://www.linkedin.com/in/patrickmichalina',
      name: 'linkedin'
    },
    {
      icon: 'fa fa-github ',
      href: 'https://github.com/patrickmichalina',
      name: 'github'
    },
    {
      icon: 'fa fa-youtube ',
      href: 'https://www.youtube.com/user/SynesthesianDreamer',
      name: 'youtube'
    },
    {
      icon: 'fa fa-twitter ',
      href: 'https://twitter.com/patmichalina',
      name: 'twitter'
    }
  ]);

  constructor(private env: EnvironmentService) {}
}
