import { BlogComponent } from './blog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe(BlogComponent.name, () => {
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should compile', async(() => {
    expect(fixture.nativeElement).toBeTruthy();
  }));
});
