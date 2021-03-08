import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WichtelpartnerComponent } from './wichtelpartner.component';

describe('WichtelpartnerComponent', () => {
  let component: WichtelpartnerComponent;
  let fixture: ComponentFixture<WichtelpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WichtelpartnerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WichtelpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
