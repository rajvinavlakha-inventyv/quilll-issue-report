import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebActivityComponent } from './web-activity.component';

describe('WebActivityComponent', () => {
  let component: WebActivityComponent;
  let fixture: ComponentFixture<WebActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
