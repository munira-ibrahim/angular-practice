import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  Counter : number = 0
  getCounter(){
    return this.Counter;
  }

  increaseCounter(){
    return this.Counter++;
  }
  constructor() { }
}
