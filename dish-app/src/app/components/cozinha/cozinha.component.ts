import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Order {
  id: number;
  status: string;
  product: Product[];
  idcliente: {
    id: number;
    name: string;
    endereco: string;
    telefone: string;
  };
}

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CozinhaComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders.filter(order => order.status === 'Pendente' || order.status === 'Fazendo');
    });
  }

  updateOrderStatus(order: Order): void {
    this.orderService.updateOrder(order).subscribe({
      next: (updatedOrder) => {
        console.log(`Status do pedido ${updatedOrder.id} atualizado com sucesso!`);
        
        // Se o status for "Pronto", removemos o pedido da lista local
        if (updatedOrder.status === 'Despache') {
          this.orders = this.orders.filter(o => o.id !== updatedOrder.id);
        }
      },
      error: (error) => console.error(`Erro ao atualizar o pedido ${order.id}:`, error)
    });
  }
}
