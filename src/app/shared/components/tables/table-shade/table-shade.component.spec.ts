import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShadeComponent } from './table-shade.component';

describe('TableShadeComponent', () => {
  let component: TableShadeComponent;
  let fixture: ComponentFixture<TableShadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableShadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
