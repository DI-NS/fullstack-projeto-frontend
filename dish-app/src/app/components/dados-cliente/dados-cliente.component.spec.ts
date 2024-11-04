import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dados-cliente',
  standalone: true,
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css'],
  imports: [InputTextModule, FloatLabelModule, FormsModule]
})
export class DadosClienteComponent {
  value: string = ''; // Propriedade usada pelo [(ngModel)] no campo de username
  nome: string = '';  // Propriedade usada pelo [(ngModel)] no campo de nome
  rua: string = ''; 
  numero: string = '';// Propriedade usada pelo [(ngModel)] no campo de email

  onSubmit() {
    // lógica para o envio do formulário
    console.log('Formulário enviado:', { value: this.value, nome: this.nome, rua: this.rua, numero: this.numero });
  }
}
