import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCollabComponent } from './ajout-collab.component';

describe('AjoutCollabComponent', () => {
  let component: AjoutCollabComponent;
  let fixture: ComponentFixture<AjoutCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCollabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
