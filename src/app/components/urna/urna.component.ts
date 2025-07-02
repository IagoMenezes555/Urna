import { Component } from '@angular/core';
import { ScreenComponent } from '../screen/screen.component';
import { PadComponent } from '../pad/pad.component';

@Component({
  selector: 'app-urna',
  imports: [ScreenComponent, PadComponent],
  templateUrl: './urna.component.html',
  styleUrl: './urna.component.scss'
})
export class UrnaComponent {

}
