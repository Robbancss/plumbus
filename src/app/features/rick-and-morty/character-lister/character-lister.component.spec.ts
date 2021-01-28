import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListerComponent } from './character-lister.component';

describe('CharacterListerComponent', () => {
  let component: CharacterListerComponent;
  let fixture: ComponentFixture<CharacterListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
