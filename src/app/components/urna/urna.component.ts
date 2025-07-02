import { Component } from '@angular/core';
import { ScreenComponent } from '../screen/screen.component';
import { PadComponent } from '../pad/pad.component';
import { UrnaService } from '../../services/urna.service';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-urna',
  imports: [ScreenComponent, PadComponent],
  templateUrl: './urna.component.html',
  styleUrl: './urna.component.scss',
})
export class UrnaComponent implements DoCheck{
  prefeito: Prefeito
  ultimoNumero = "";

  constructor(private urnaService: UrnaService){
    this.prefeito = new Prefeito(this.urnaService)
  }

  ngDoCheck(){
    const numeroAtual = this.urnaService.number
    if(numeroAtual != this.ultimoNumero){
      this.ultimoNumero = numeroAtual;
      this.prefeito.obterTodos();
    }
  }
  
}

export class Candidato {
  constructor(public urnaService: UrnaService) {}
  nome: string = '';
  partido: string = '';
  imagem: string = '';

  get numero(): string{
    return this.urnaService.number;
  }
}

export class Prefeito extends Candidato {
  constructor (urnaService: UrnaService){
    super(urnaService);
  }

  public obterTodos() {
    const list = [
      { nome: 'Goku', partido: 'Sayajin', numero: '12', imagem: '' },
      { nome: 'Batman', partido: 'Morcegão', numero: '11', imagem: '' },
      { nome: 'Scooby', partido: 'Mistério', numero: '10', imagem: '' },
      { nome: 'Vader', partido: 'Estrela', numero: '89', imagem: '' },
      { nome: 'Homem Aranha', partido: 'Aranhas', numero: '25', imagem: '' },
    ];

    for(let i = 0; i < list.length; i++){
      if(this.numero == list[i].numero){
        this.partido = list[i].partido;
        this.urnaService.partido = this.partido;
        console.log(this.urnaService.partido);
      }
    }
  }
}

export class Vereador extends Candidato {}