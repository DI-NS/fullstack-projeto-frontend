import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(this.apiUrl, order);
  }
}
