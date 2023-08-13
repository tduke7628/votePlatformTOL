import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteDoneComponent } from './vote-done.component';

describe('VoteDoneComponent', () => {
  let component: VoteDoneComponent;
  let fixture: ComponentFixture<VoteDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
