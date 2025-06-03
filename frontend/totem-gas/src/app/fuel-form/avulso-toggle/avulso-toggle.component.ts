// avulso-toggle.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avulso-toggle',
  standalone: true,
  template: `
    <div class="avulso-toggle">
      <label>
        <input type="checkbox" [checked]="ativado" (change)="toggle()" />
        Abastecimento Avulso
      </label>
    </div>
  `,
  styles: [`...`]
})
export class AvulsoToggleComponent {
  @Input() ativado = false;
  @Output() ativadoChange = new EventEmitter<boolean>();

  toggle() {
    this.ativado = !this.ativado;
    this.ativadoChange.emit(this.ativado);
  }
}
