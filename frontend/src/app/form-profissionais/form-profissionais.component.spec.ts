import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfissionaisComponent } from './form-profissionais.component';

describe('FormProfissionaisComponent', () => {
  let component: FormProfissionaisComponent;
  let fixture: ComponentFixture<FormProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormProfissionaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
