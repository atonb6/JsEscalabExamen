import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDepsComponent } from './art-deps.component';

describe('ArtDepsComponent', () => {
  let component: ArtDepsComponent;
  let fixture: ComponentFixture<ArtDepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtDepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
