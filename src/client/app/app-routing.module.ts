import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: '~/client/app/+home/home.module#HomeModule' },
  { path: 'about', loadChildren: '~/client/app/+about/about.module#AboutModule' },
  { path: 'projects', loadChildren: '~/client/app/+projects/projects.module#ProjectsModule' },
  { path: 'resume', loadChildren: '~/client/app/+resume/resume.module#ResumeModule' },
  { path: 'blog', loadChildren: '~/client/app/+blog/blog.module#BlogModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
