import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchUserComponent } from './input-search-user.component';

describe('InputSearchUserComponent', () => {
  let component: InputSearchUserComponent;
  let fixture: ComponentFixture<InputSearchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSearchUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
