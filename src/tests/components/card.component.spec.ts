import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from '../../app/components/card/card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});