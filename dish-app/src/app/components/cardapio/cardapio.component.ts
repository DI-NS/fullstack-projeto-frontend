// cardapio.component.ts
import { Component, OnInit } from '@angular/core';
import { CardapioService, Dish } from '../../services/cardapio.service';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
  standalone: true,
  imports: [CommonModule, CheckboxModule, FormsModule, ButtonModule]
})
export class CardapioComponent implements OnInit {
  dishes: Dish[] = [];
  selectedDishes: Dish[] = [];

  constructor(private cardapioService: CardapioService, private router: Router) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes() {
    this.cardapioService.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data.map(dish => ({ ...dish, selected: false }));
    }, (error) => {
      console.error('Erro ao carregar pratos:', error);
    });
  }

  navigateToDadosCliente() {
    // Armazena os pratos selecionados no local storage
    const selectedDishes = this.dishes.filter(dish => dish.selected);
    localStorage.setItem('selectedDishes', JSON.stringify(selectedDishes));
    
    this.router.navigate(['/dados-cliente']);
  }
}
