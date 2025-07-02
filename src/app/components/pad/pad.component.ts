import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrnaService } from '../../services/urna.service';

@Component({
  selector: 'app-pad',
  imports: [CommonModule],
  templateUrl: './pad.component.html',
  styleUrl: './pad.component.scss',
})
export class PadComponent {
  constructor(private urnaService: UrnaService) {}
  number: string = '';
  numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  numberClick(number: number) {
    if (this.number.length < 4) {
      this.number = this.number + number;
      this.urnaService.number = this.number;
    }
  }

  corrige() {
    this.number = this.number.slice(0, -1);
    this.urnaService.number = this.number;
  }

  branco() {
    this.urnaService.partido = 'BRANCO';
    this.urnaService.nome = 'BRANCO';
    this.urnaService.imagem = './user.png';
  }

  votouPrefeito: boolean = false;
  votouVereador: boolean = false;

  confirma() {
    if (this.urnaService.number.length == 2 && this.votouPrefeito == false) {
      alert('Você votou pra prefeito');
      this.votouPrefeito = true;
    }

    if (this.urnaService.number.length == 4 && this.votouVereador == false) {
      alert('Você votou pra vereador');
      this.votouVereador = true;
    }
  }
}
