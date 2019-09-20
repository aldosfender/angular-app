import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcplayerComponent } from './lfcplayer.component';

describe('LfcplayerComponent', () => {
  let component: LfcplayerComponent;
  let fixture: ComponentFixture<LfcplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfcplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
