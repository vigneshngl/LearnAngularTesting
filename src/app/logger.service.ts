import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log (msg) {
    console.log(msg)
  }
  
  constructor() { }
}
