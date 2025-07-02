import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrnaService {
  number: string = "";
  partido: string = "";

  constructor() { }
}
