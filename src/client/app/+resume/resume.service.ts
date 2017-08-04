import { EnvironmentService } from './../shared/services/environment.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable:max-line-length

export interface Link {
  href: string;
  title: string;
}

export interface Education {
  school: Link;
  start?: string;
  stop?: string;
  summary?: any;
  program?: Link;
}

export interface Experience {
  title: string;
  employer: Link;
  start: string;
  stop: string;
  summary: string;
  documents?: Link[];
  image?: any;
}

@Injectable()
export class ResumeService {
  private documentRoot = 'assets/documents';
  private imageRoot = 'assets/images';

  constructor(private env: EnvironmentService) { }

  skills = [
    { level: 'expert', name: 'Responsive Web Design', category: 'Concepts', href: 'https://en.wikipedia.org/wiki/Responsive_web_design' },
    { level: 'expert', name: 'Visual Studio', category: 'Tools', href: 'https://www.visualstudio.com' },
    { level: 'expert', name: 'GitHub', category: 'Tools', href: 'https://github.com' },
    { level: 'expert', name: 'C#', category: 'Languages', href: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' },
    { level: 'expert', name: 'JavaScript', category: 'Languages', href: 'https://en.wikipedia.org/wiki/JavaScript' },
    { level: 'expert', name: 'Node', category: 'Frameworks', href: 'https://nodejs.org' },
    { level: 'Expert', name: 'Angular', category: 'Frameworks', href: 'https://angular.io' },
    { level: 'Expert', name: 'TypeScript', category: 'Languages', href: 'https://www.typescriptlang.org' },
    { level: 'Expert', name: 'Java', category: 'Languages', href: 'https://en.wikipedia.org/wiki/Java_(programming_language)' },
    { level: 'Expert', name: 'HTML', category: 'Languages', href: 'https://en.wikipedia.org/wiki/HTML' },
    { level: 'Expert', name: 'CSS', category: 'Languages', href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets' },
    { level: 'Expert', name: 'SCSS', category: 'Languages', href: 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)' },
    { level: 'Expert', name: 'SQL', category: 'Languages', href: 'https://en.wikipedia.org/wiki/SQL' },
    { level: 'Expert', name: '.NET', category: 'Frameworks', href: 'https://www.microsoft.com/net/core' },
    { level: 'Expert', name: 'SQL Server', category: 'Tools', href: 'https://www.microsoft.com/en-us/sql-server/sql-server-2016' },
    { level: 'Expert', name: 'Git', category: 'Tools', href: 'https://git-scm.com' },
    { level: 'Expert', name: 'NPM', category: 'Tools', href: 'https://www.npmjs.com' },
    { level: 'Expert', name: 'Azure Web Services', category: 'Tools', href: 'https://azure.microsoft.com' },
    { level: 'Expert', name: 'Amazon Web Services (AWS)', category: 'Tools', href: 'https://aws.amazon.com' },
    { level: 'Expert', name: 'OData', category: 'Frameworks', href: 'http://www.odata.org' },
    { level: 'Expert', name: 'Entity Framework', category: 'Frameworks', href: 'https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/ef/overview' },
    { level: 'Expert', name: 'WebAPI', category: 'Frameworks', href: 'https://www.asp.net/web-api' },
    { level: 'Expert', name: 'RESTful Web Services', category: 'Concepts', href: 'https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm' },
    { level: 'Expert', name: 'Microservices', category: 'Concepts', href: 'https://en.wikipedia.org/wiki/Microservices' },
    { level: 'Expert', name: 'Service Oriented Architecture (SOA)', category: 'Concepts', href: 'https://en.wikipedia.org/wiki/Service-oriented_architecture' },
    { level: 'Expert', name: 'Software Testing', category: 'Concepts', href: 'https://en.wikipedia.org/wiki/Software_testing' },
    { level: 'Expert', name: 'Cloud Computing', category: 'Concepts', href: 'https://en.wikipedia.org/wiki/Cloud_computing' },
    { level: 'Expert', name: 'SASS', category: 'Concepts', href: 'https://en.wikipedia.org/wiki/Software_as_a_service' },
    { level: 'Expert', name: 'CQRS', category: 'Concepts', href: 'https://en.wikipedia.org/wiki/Command%E2%80%93query_separation#Command_query_responsibility_segregation' },
    { level: 'Expert', name: 'Functional Reactive Programming', category: 'Concepts', href: 'https://en.wikipedia.org/wiki/Functional_reactive_programming' }
  ].reduce((prev: any, current, index) => {
    prev[current.category] = [...prev[current.category] || [], current];
    return prev;
  }, {});

  experiences: Experience[] = [
    {
      employer: {
        title: 'FloSports, Inc.',
        href: 'http://www.flosports.tv'
      },
      start: 'May 2017',
      stop: 'Present',
      title: 'Senior Software Engineer',
      summary: '<p>Lead front end engineer on FloSport’s new web 3.0 content delivery platform. A highly customizable single page application that uses isomorphic javascript.</p>',
      image: {
        alt: 'FloSports, Inc. logo',
        src: 'flo.png'
      }
    },
    {
      employer: {
        title: 'Blizzard Entertainment',
        href: 'http://us.blizzard.com'
      },
      start: 'December 2015',
      stop: 'May 2017',
      title: 'Software Engineer',
      summary: 'Engineer on the \"Atlas\" development team. Blizzard\'s global customer support system for the <a href="https://worldofwarcraft.com">World of Warcraft</a>, <a href="">StarCraft</a>, <a href="">Diablo</a>, <a href="">Hearthstone</a>, and <a href="">Overwatch</a> franchises. Atlas software brings the best customer service experience to millions of Blizzard fans worldwide. Served as Lead front-end developer for a custom workflow platform and user interface (UI) library. This system is highly modular, generic, and reusable. <em>Technologies: angular, javascript, typeScript, rxjs, node, .net, sql server, rabbitmq</em>',
      image: {
        alt: 'Blizzard Entertainment logo',
        src: 'blizzard.png'
      }
    },
    {
      employer: {
        title: 'Intel Corporaton',
        href: 'https://www-ssl.intel.com/content/www/us/en/company-overview/company-overview.html'
      },
      start: 'July 2014',
      stop: 'November 2015',
      title: 'Full Stack Developer',
      summary: 'Lead full stack developer in the Intel IT Rotation Program; designing, developing, debugging, and testing complex software systems. Developed the web services and web interface for Intel IT’s application-server intelligence platform. Implemented a custom linear optimization model to determine best-case hosting configuration of the entire fleet of virtual machines based on a set of business constraints. <em>Technologies used: JavaScript, Node, C#, .NET, OData, WebAPI, Angular, SQL</em>',
      image: {
        alt: 'Intel Corporaton logo',
        src: 'intel.png'
      }
    },
    {
      employer: {
        title: 'U.S. Army',
        href: 'https://www.army.mil'
      },
      start: 'November 2003',
      stop: 'April 2014',
      title: 'Staff Sergeant',
      summary: '<p>Developed a custom personnel and training management application for the annual training requirements US Army personnel. Features included: deployment tasks, technical tasks, and individual preparedness for disaster relief efforts across the United States as well as power missions throughout the pacific region. This system allowed employees to access all records through a single and unified interface.</p><p>Planned, employed, and coordinated CBRN defense systems in support of joint and combined arms operations including CBRN reconnaissance systems, biological agent detection systems (BIDS), obscurant systems, CBRN decontamination systems, and other CBRN hazard detection and warning systems.</p>',
      image: {
        alt: 'U.S. Army logo',
        src: 'army.png'
      }
    }
  ].map(item => {
    return {
      ...item,
      image: { ...item.image, src: `${this.env.config.endpoints.cdn}/${this.imageRoot}/${item.image.src}` }
    };
  });

  education: Education[] = [
    {
      school: {
        href: 'http://www.uis.edu',
        title: 'University of Illinois at Springfield'
      },
      date: '2013',
      program: {
        href: 'patrick-michalina-ms-computer-science.pdf',
        title: 'Master of Science in Computer Science'
      },
      summary: 'Oriented toward the design, analysis, and implementation of software programs.',
      image: {
        alt: 'University of Illinois at Springfield logo',
        src: 'uis.png'
      }
    },
    {
      school: {
        href: 'http://www.uis.edu',
        title: 'University of Illinois at Springfield'
      },
      date: '2011',
      program: {
        href: 'patrick-michalina-bs-computer-science.pdf',
        title: 'Bachelor of Science in Computer Science'
      },
      summary: 'Oriented toward the design, analysis, and implementation of software programs.',
      image: {
        alt: 'University of Illinois at Springfield logo',
        src: 'uis.png'
      }
    },
    {
      school: {
        href: 'http://www.usace.army.mil/Prime-Power-School',
        title: 'U.S. Army Prime Power School'
      },
      date: '2009',
      summary: 'The Prime Power Production Specialist Course, with Additional Skill Identifier (ASI), is a year-long program of instruction designed to train selected applicants to deploy, install, operate, and maintain the Army\'s Prime Power Program (P3) power generation and distribution assets in support of theater commanders under the provisions of AR 700-128.',
      program: {
        href: 'patrick_michalina_prime_power_school.pdf',
        title: 'Diploma'
      },
      image: {
        alt: 'U.S. Army Prime Power School',
        src: 'corp_eng.png'
      }
    }
  ].map(item => {
    return {
      ...item,
      program: { ...item.program, href: `${this.env.config.endpoints.cdn}/${this.documentRoot}/${item.program.href}` },
      image: { ...item.image, src: `${this.env.config.endpoints.cdn}/${this.imageRoot}/${item.image.src}` }
    };
  });

  awards = [
    { link: { href: '', title: '' }, date: '' }
  ];

  resume$ = Observable.of({
    skills: this.skills,
    experience: this.experiences,
    education: this.education,
    awards: this.awards
  });
}
