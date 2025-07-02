import { Component } from '@angular/core';
import { UrnaService } from '../../services/urna.service';

@Component({
  selector: 'app-screen',
  imports: [],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss'
})
export class ScreenComponent {
  constructor(private urnaService: UrnaService){}

  get numero(): string {
    return this.urnaService.number;
  }
}
