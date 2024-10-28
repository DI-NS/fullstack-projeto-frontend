import { Component, OnInit } from '@angular/core';
import { CardapioService, Dish } from '../../services/cardapio.service';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms'; // Importando FormsModule
import { ButtonModule } from 'primeng/button'; // Importando ButtonModule

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
  standalone: true,
  imports: [CommonModule, CheckboxModule, FormsModule, ButtonModule] // Adicione ButtonModule aqui
})
export class CardapioComponent implements OnInit {
  dishes: Dish[] = [];
  selectedDishes: Dish[] = [];

  constructor(private cardapioService: CardapioService) {}

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
}
