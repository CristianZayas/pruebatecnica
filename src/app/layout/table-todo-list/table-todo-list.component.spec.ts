import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTODOLISTComponent } from './table-todo-list.component';

describe('TableTODOLISTComponent', () => {
  let component: TableTODOLISTComponent;
  let fixture: ComponentFixture<TableTODOLISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTODOLISTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTODOLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
