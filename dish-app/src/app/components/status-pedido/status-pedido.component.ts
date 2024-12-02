import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-status-pedido',
  standalone: true,
  imports: [CommonModule], // Certifique-se de que isso está aqui
  templateUrl: './status-pedido.component.html',
  styleUrls: ['./status-pedido.component.css']
})
export class StatusPedidoComponent implements OnInit {
  pedidoId: number | undefined;
  pedido: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.pedidoId = +id; // Converte para número
        if (isNaN(this.pedidoId)) {
          console.error('ID do pedido não é um número válido:', id);
          return;
        }
        this.buscarPedido();
      } else {
        console.error('ID do pedido não fornecido!');
      }
    });
  }

  buscarPedido(): void {
    if (this.pedidoId !== undefined) {
      const url = `http://localhost:8080/api/orders/${this.pedidoId}`;
      this.http.get(url).subscribe({
        next: (data) => {
          this.pedido = data;
        },
        error: (err) => {
          console.error('Erro ao buscar o pedido:', err);
        },
      });
    }
  }
}
