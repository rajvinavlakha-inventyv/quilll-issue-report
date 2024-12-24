import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailActivityComponent } from './email-activity.component';

describe('EmailActivityComponent', () => {
  let component: EmailActivityComponent;
  let fixture: ComponentFixture<EmailActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
