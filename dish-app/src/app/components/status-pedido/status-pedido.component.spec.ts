import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPedidoComponent } from './status-pedido.component';

describe('StatusPedidoComponent', () => {
  let component: StatusPedidoComponent;
  let fixture: ComponentFixture<StatusPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
