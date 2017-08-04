import { EnvironmentService } from './../shared/services/environment.service';
import { ResumeService } from './resume.service';
import { ResumeComponent } from './resume.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjectKeysPipe } from './keys.pipe';

describe(ResumeComponent.name, () => {
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent, ObjectKeysPipe],
      providers: [ResumeService, EnvironmentService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should compile', async(() => {
    expect(fixture.nativeElement).toBeTruthy();
  }));
});
