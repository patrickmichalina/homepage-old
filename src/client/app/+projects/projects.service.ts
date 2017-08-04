import { EnvironmentService } from './../shared/services/environment.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

// tslint:disable:max-line-length
@Injectable()
export class ProjectsService {
  private imageRoot = 'assets/images';

  constructor(private env: EnvironmentService) {}

  projects$ = Observable.of([
    {
      name: 'Fusebox Angular Universal Starter',
      owner: 'Patrick Michalina',
      tech: ['Angular', 'Node', 'FuseBox', 'SCSS'],
      description: 'A starter repository for anyone wanting a simple way to start using Fuse-Box with Angular Universal for server side renderening. This starter includes many features like Angular 5, Jest unit testing, Brotli compression, sitemap generation, lazy loaded modules, and much more!',
      sourceLink: {
        href: 'https://github.com/patrickmichalina/fusebox-angular-universal-starter',
        name: 'Github Repo'
      },
      demoLink: {
        href: 'https://angular.patrickmichalina.com',
        name: 'https://angular.patrickmichalina.com'
      }
    },
    {
      name: 'FloSports 3.0 Web Platform',
      owner: 'FloSports, Inc.',
      tech: ['Angular', 'Node', 'SystemJS', 'FuseBox'],
      description: 'Angular Universal based content delivery platform for FloSport\'s many sports.',
      demoLink: {
        href: 'https://www.flohockey.tv',
        name: ''
      }
    },
    {
      name: 'Atlas Workflow Engine',
      owner: 'Blizzard, Inc.',
      tech: [],
      description: ''
    },
    {
      name: 'Atlas Reusable Component Library',
      owner: 'Blizzard, Inc.',
      tech: [],
      description: ''
    },
    {
      name: 'Business Continuity and Disaster Recovery Tool (BCDR)',
      owner: 'Intel Corporation',
      tech: []
    },
    {
      name: 'IT Emergency Response Process Management Tool (ITERPmt)',
      owner: 'Intel Corporation',
      tech: [],
      description: `We built a tool to help facilitate the IT Emergency Response process.
      Before we built the new tool, the process was scattered between Excel files, Sharepoint sites, and lots of human glue.`
    },
    {
      name: 'People',
      owner: 'Intel Corporation',
      tech: [],
      description: `The vision of people.intel.com was to provide a single place for the employee to view and update employee data.
We started by combining the features of the employee/org search app with expert finding functionality.
I designed and helped develop the front-end of the application.`
    },
    {
      name: 'Intel IT Infrastructure Intelligence (I4)',
      owner: 'Intel Corporation',
      tech: []
    },
    {
      name: 'ZetaFish',
      owner: 'Patrick Michalina',
      description: 'Java based GoFish card game created for a university project',
      tech: ['Java'],
      sourceLink: {
        href: 'https://github.com/patrickmichalina/zetafish',
        name: 'Github Repo'
      }
    },
    {
      name: 'This Homepage',
      owner: 'Patrick Michalina',
      description: 'A simple personal homepage',
      image: 'profile.jpg',
      tech: ['Angular', 'Node', 'SystemJS', 'FuseBox'],
      sourceLink: {
        href: 'https://github.com/patrickmichalina/homepage',
        name: 'Github Repo'
      },
      demoLink: {
        href: 'https://www.patrickmichalina.com',
        name: 'https://www.patrickmichalina.com'
      }
    }
  ].map((a: any) => ({
    ...a,
    tech: a.tech.join(', '),
    image: a.image ? `${this.env.config.endpoints.cdn}/${this.imageRoot}/${a.image}` : undefined
  })));
}
