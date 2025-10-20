import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CirculoComponent } from '../componentes/circulo/circulo.component';
import { TrianguloComponent } from '../componentes/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CirculoComponent, TrianguloComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  figuraSeleccionada: string = '';
}