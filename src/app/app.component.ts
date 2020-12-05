import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'app Calculadora';
  numeroA:number;
  numeroB:number;
  resultado:number;

  sumarNumeros():void{
    this.resultado = this.numeroA + this.numeroB;
  }
  multiplicarNumeros():void{
    this.resultado = this.numeroA * this.numeroB;
  }
  restarNumeros():void{
    this.resultado = this.numeroA - this.numeroB;
  }
  dividirNumeros():void{
    this.resultado = this.numeroA / this.numeroB;
  }
}
