import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTODOLISTComponent } from './formulario-todo-list.component';

describe('FormularioTODOLISTComponent', () => {
  let component: FormularioTODOLISTComponent;
  let fixture: ComponentFixture<FormularioTODOLISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioTODOLISTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioTODOLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
