import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsDeedsSectionComponent } from './awards-deeds-section.component';

describe('AwardsDeedsSectionComponent', () => {
  let component: AwardsDeedsSectionComponent;
  let fixture: ComponentFixture<AwardsDeedsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsDeedsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardsDeedsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
