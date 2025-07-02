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
    if(this.number.length < 4){
      this.number = this.number + number;
      this.urnaService.number = this.number;
    }
  }

  corrigir(){
    this.number = this.number.slice(0, -1)
    this.urnaService.number = this.number;
  }
}
