import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../../modelo/triangulo-escaleno';
import { TrianguloEquilatero } from '../../modelo/triangulo-equilatero';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: number | null = null;
  tipoDetectado: string = '';
  claseUsada: string = '';

  calcular() {
    if (this.ladoA === this.ladoB && this.ladoB === this.ladoC) {
      const figura = new TrianguloEquilatero(this.ladoA);
      this.resultado = figura.calcularPerimetro();
      this.tipoDetectado = 'equilátero';
      this.claseUsada = figura.constructor.name;
    } else {
      const figura = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.resultado = figura.calcularPerimetro();
      this.tipoDetectado = 'escaleno';
      this.claseUsada = figura.constructor.name;
    }
  }
}
