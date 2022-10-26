import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdutosComponent } from './update-produtos.component';

describe('UpdateProdutosComponent', () => {
  let component: UpdateProdutosComponent;
  let fixture: ComponentFixture<UpdateProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
