import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { CardapioComponent } from './components/cardapio/cardapio.component'; 
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms'; // Adicione esta linha
import { DadosClienteComponent } from './components/dados-cliente/dados-cliente.component'; // Importe seu componente
import { CozinhaComponent } from './components/cozinha/cozinha.component'; // ajuste o caminho conforme necessário
import { EntregaComponent } from './components/entrega/entrega.component'; // ajuste o caminho conforme necessário



const routes: Routes = [
  { path: '', component: DishListComponent },
  { path: 'add-dish', component: DishFormComponent },
  { path: 'edit-dish/:id', component: DishFormComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'dados-cliente', component: DadosClienteComponent },// Adicione esta linha
  { path: 'cozinha', component: CozinhaComponent },
  { path: 'entrega', component: EntregaComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, CheckboxModule, FormsModule) // Adicione FormsModule aqui
  ]
};
