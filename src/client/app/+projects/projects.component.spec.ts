import { ProjectsService } from './projects.service';
import { ProjectsComponent } from './projects.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe(ProjectsComponent.name, () => {
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      providers: [ProjectsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should compile', async(() => {
    expect(fixture.nativeElement).toBeTruthy();
  }));
});
