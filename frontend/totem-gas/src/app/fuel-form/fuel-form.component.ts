import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from '../virtual-keyboard/virtual-keyboard.component';

@Component({
  selector: 'app-fuel-form',
  standalone: true,
  imports: [CommonModule, FormsModule, KeyboardComponent],
  templateUrl: './fuel-form.component.html',
  styleUrls: ['./fuel-form.component.scss']
})
export class FuelFormComponent {
  quantidade = 0;
  placa = '';
  preco = 5.89;
  total = 0;
  campoAtivo: 'quantidade' | 'placa' | null = null;

  abrirTeclado(campo: 'quantidade' | 'placa') {
    this.campoAtivo = campo;
  }

  atualizarCampo(valor: string) {
  if (this.campoAtivo === 'quantidade') {
    const numero = parseFloat(valor);
    if (!isNaN(numero) && numero <= 500) {
      this.quantidade = numero;
      this.calcularTotal();
    } else if (valor === '') {
      this.quantidade = 0;
      this.total = 0;
    }
  } else if (this.campoAtivo === 'placa') {
    this.placa = valor.toUpperCase();
  }

  // Mantém teclado aberto até o usuário fechar (ex: botão OK, se quiser)
}

  calcularTotal() {
    this.total = this.quantidade * this.preco;
  }

  identificarOperador() {
    alert('Simulação: operador identificado.');
  }

  podeIniciar() {
    return this.quantidade > 0 &&
      this.quantidade <= 500 &&
      /^[A-Z]{3}-\d[A-Z]\d{2}$/i.test(this.placa);
  }

  iniciarAbastecimento() {
    alert(`Abastecimento iniciado para ${this.placa}, ${this.quantidade}L`);
  }
}
