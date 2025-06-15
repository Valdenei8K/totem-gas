import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss']
})
export class KeyboardComponent implements OnChanges {
  @Input() tipo: 'quantidade' | 'placa' = 'quantidade';
  @Input() valorInicial = '';
  @Output() valorDigitado = new EventEmitter<string>();
  @Output() fechar = new EventEmitter<void>();

  valorAtual = '';

  teclasNumericas = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'C', '0', '←', 'OK'];
  teclasAlfanumericas = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'C', '←', 'OK'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valorInicial']) {
      this.valorAtual = this.valorInicial || '';
    }
  }

  pressionar(tecla: string) {
    if (tecla === 'C') {
      this.valorAtual = '';
    } else if (tecla === '←') {
      this.valorAtual = this.valorAtual.slice(0, -1);
    } else if (tecla === 'OK') {
      this.valorDigitado.emit(this.valorAtual);
      this.fechar.emit();
      return;
    } else {
      this.valorAtual += tecla;
    }

    this.valorDigitado.emit(this.valorAtual);
  }
}
