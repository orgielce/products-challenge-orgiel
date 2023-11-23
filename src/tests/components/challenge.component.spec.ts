import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeComponent } from '../../app/components/challenge/challenge.component';

describe('ChallengeComponent', () => {
  let component: ChallengeComponent;
  let fixture: ComponentFixture<ChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeComponent]
    });
    fixture = TestBed.createComponent(ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
