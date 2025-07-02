import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pad',
  imports: [CommonModule],
  templateUrl: './pad.component.html',
  styleUrl: './pad.component.scss',
})
export class PadComponent {
  number: string = '';
  numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  numberClick(number: number) {
    this.number = this.number + number;
    console.log(this.number);
  }
}
