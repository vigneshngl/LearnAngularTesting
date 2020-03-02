import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger : LoggerService) { }

  add(n1 : number, n2 : number) {
    this.logger.log("Adding 2 numbers")
    return n1 + n2
  }

  substract(n1 : number, n2 : number) {
    this.logger.log("Substracting 2 numbers")
    return n1 - n2
  }
}
