import { Component } from '@angular/core';
import { UrnaService } from '../../services/urna.service';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-screen',
  imports: [],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss'
})
export class ScreenComponent implements DoCheck{
  constructor(private urnaService: UrnaService){}

  get nome(): string{
    return this.urnaService.nome
  }

  get numero(): string {
    return this.urnaService.number;
  }

  get partido(): string{
    return this.urnaService.partido;
  }

  get imagem(): string{
    return this.urnaService.imagem;
  }

  quantidadeDeNumeros: string = "";

  tipoDeCandidato(){
    if(this.numero.length == 2){
      this.quantidadeDeNumeros = "PREFEITO ";
    }else if(this.numero.length == 4){
      this.quantidadeDeNumeros = "VEREADOR";
    }else{
      this.quantidadeDeNumeros = "";
    }
  }

  ultimoNumero: string = "";

  ngDoCheck() {
    let numeroAtual = this.urnaService.number
    if(numeroAtual != this.ultimoNumero){
      this.ultimoNumero = numeroAtual;
      this.tipoDeCandidato();
    }
  }

}
