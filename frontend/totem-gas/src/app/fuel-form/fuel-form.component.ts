import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from '../virtual-keyboard/virtual-keyboard.component';
import { AvulsoToggleComponent } from './avulso-toggle/avulso-toggle.component';

@Component({
  selector: 'app-fuel-form',
  standalone: true,
  imports: [CommonModule, FormsModule, KeyboardComponent, AvulsoToggleComponent],
  templateUrl: './fuel-form.component.html',
  styleUrls: ['./fuel-form.component.scss']
})
export class FuelFormComponent {
  quantidade = 0;
  placa = '';
  preco = 6.69;
  total = 0;
  campoAtivo: 'quantidade' | 'placa' | null = null;
  modoAvulso = false;

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
  }

  calcularTotal() {
    this.total = this.quantidade * this.preco;
  }

  identificarOperador() {
    alert('Simulação: operador identificado.');
  }

  podeIniciar() {
    const quantidadeOk = this.modoAvulso || (this.quantidade > 0 && this.quantidade <= 500);
    const placaOk = /^[A-Z]{3}-\d[A-Z]\d{2}$/i.test(this.placa);
    return quantidadeOk && placaOk;
  }

  iniciarAbastecimento() {
    const modo = this.modoAvulso ? 'Modo Avulso' : `${this.quantidade}L`;
    alert(`Abastecimento iniciado para ${this.placa}, ${modo}`);
  }
}
