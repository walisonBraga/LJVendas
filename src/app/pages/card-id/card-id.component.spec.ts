import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIDComponent } from './card-id.component';

describe('CardIDComponent', () => {
  let component: CardIDComponent;
  let fixture: ComponentFixture<CardIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardIDComponent]
    });
    fixture = TestBed.createComponent(CardIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
