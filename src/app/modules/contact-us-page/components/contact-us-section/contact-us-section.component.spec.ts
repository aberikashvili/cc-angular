import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsSectionComponent } from './ContactUsSectionComponent';

describe('ContactUsSectionComponent', () => {
  let component: ContactUsSectionComponent;
  let fixture: ComponentFixture<ContactUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
