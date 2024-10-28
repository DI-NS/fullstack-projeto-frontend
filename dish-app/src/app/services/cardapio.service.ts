import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dish {
  id?: number;
  name: string;
  description: string;
  price: number;
  selected?: boolean; // Adicionando a propriedade selected
}

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  private apiUrl = 'http://localhost:8080/dishes';

  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.apiUrl);
  }
}
