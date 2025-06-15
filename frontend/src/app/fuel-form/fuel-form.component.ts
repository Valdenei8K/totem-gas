import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from '../virtual-keyboard/virtual-keyboard.component';
import { AvulsoToggleComponent } from './avulso-toggle/avulso-toggle.component';
import { RelayService } from '../services/relay.service'; // 👈 Importa o service
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fuel-form',
  standalone: true,
  imports: [CommonModule, FormsModule, KeyboardComponent, AvulsoToggleComponent, HttpClientModule],
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

  abastecendo = false; // 👈 Estado do abastecimento

  constructor(private relayService: RelayService) {}

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
    // const placaOk = /^[A-Z]{3}-\d[A-Z]\d{2}$/i.test(this.placa);
    return quantidadeOk; // && placaOk;
  }

  async iniciarOuEncerrar() {
    if (!this.abastecendo) {
      // 👉 Iniciar abastecimento (Ligar relé)
      try {
        await this.relayService.ligar();
        this.abastecendo = true;
        alert('⛽ Abastecimento iniciado!');
      } catch (error) {
        alert('Erro ao iniciar abastecimento');
        console.error(error);
      }
    } else {
      // 👉 Encerrar abastecimento (Desligar relé)
      try {
        await this.relayService.desligar();
        this.abastecendo = false;
        alert('🚫 Abastecimento encerrado!');
      } catch (error) {
        alert('Erro ao encerrar abastecimento');
        console.error(error);
      }
    }
  }
}
