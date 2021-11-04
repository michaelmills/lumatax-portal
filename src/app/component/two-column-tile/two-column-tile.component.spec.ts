import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnTileComponent } from './two-column-tile.component';

describe('TwoColumnTileComponent', () => {
  let component: TwoColumnTileComponent;
  let fixture: ComponentFixture<TwoColumnTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
