import { AppComponent } from './app.component';
import { EnvConfig } from '../../../tools/config/app.config';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { async } from '@angular/core/testing';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { HomeComponent } from './+home/home.component';
import { AboutComponent } from './+about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ENV_CONFIG } from './app.config';
import { EnvironmentService } from './shared/services/environment.service';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarService } from './shared/navbar/navbar.service';
import '../operators';

const TESTING_CONFIG: EnvConfig = {
  name: 'Homepage',
  // tslint:disable-next-line:max-line-length
  description: '',
  pageTitleSeparator: ' - ',
  endpoints: {
  },
  og: {
    defaultSocialImage: '',
    facebookAppId: ''
  },
  server: {
    host: 'http://localhost',
    port: 8083,
    minifyIndex: true
  }
};

describe('App component', () => {
  const config: Array<Route> = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(config),
        Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])],
      declarations: [TestComponent, NavbarComponent, AppComponent,
        HomeComponent, AboutComponent],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ENV_CONFIG, useValue: TESTING_CONFIG },
        EnvironmentService,
        NavbarService
      ]
    }).compileComponents();
  }));

  it('should build without a problem',
    async(() => {
      TestBed
        .compileComponents()
        .then(() => {
          const fixture = TestBed.createComponent(TestComponent);
          const compiled = fixture.nativeElement;

          expect(compiled).toBeTruthy();
        });
    }));
});

@Component({
  selector: 'test-cmp',
  template: '<pm-app></pm-app>'
})
class TestComponent { }
