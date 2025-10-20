import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../../modelo/circulo';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']
})
export class CirculoComponent {
  radio: number = 0;
  resultado: number | null = null;
  claseUsada: string = '';

  calcular() {
    const figura = new Circulo(this.radio);
    this.resultado = figura.calcularPerimetro();
    this.claseUsada = figura.constructor.name;
  }
}