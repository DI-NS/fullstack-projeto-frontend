import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api'; // Importe o MessageService
import { MessagesModule } from 'primeng/messages'; // Importe o MessagesModule


@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css'],
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ButtonModule, MessagesModule],
  providers: [MessageService] // Adicione o MessageService aqui
})
export class DadosClienteComponent {
  nome: string = '';
  rua: string = '';
  numero: string = '';
  complemento: string = '';
  CEP: string = '';
  estado: string = '';
  cidade: string = '';
  private apiUrl = 'http://localhost:8080/api/orders'; // Defina a URL da API

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {}

  onSubmit() {
    const selectedDishes = JSON.parse(localStorage.getItem('selectedDishes') || '[]');

    // Monta o objeto do pedido
    const order = {
      id: 0, // O id pode ser gerado no backend
      status: 'Pendente',
      product: selectedDishes,
      idcliente: {
        id: 0, // O id pode ser gerado no backend
        name: this.nome,
        endereco: `${this.rua}, ${this.numero} ${this.complemento}`,
        telefone: '', // Adicione um campo para telefone, se necessário
      }
    };

    this.http.post(this.apiUrl, order).subscribe(response => {
      console.log('Pedido criado com sucesso:', response);
      // Mostra o popup de confirmação
      this.messageService.add({ severity: 'success', summary: 'Pedido Confirmado', detail: 'Seu pedido foi criado com sucesso!' });

      // Redirecione ou exiba uma mensagem de sucesso
      this.router.navigate(['/success']); // Ajuste para onde deseja navegar
    }, error => {
      console.error('Erro ao criar pedido:', error);
      // Mostra o popup de erro
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao criar o pedido. Tente novamente.' });
    });
  }
}
