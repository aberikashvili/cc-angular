import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmHouseComponent } from './warm-house.component';

describe('WarmHouseComponent', () => {
  let component: WarmHouseComponent;
  let fixture: ComponentFixture<WarmHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarmHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarmHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
