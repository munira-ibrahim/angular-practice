import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number ;
  constructor(private counterService : CounterService) { }

  ngOnInit() {
     this.counter = this.counterService.getCounter();
     
     
  }

  getCounter(){
    return this.counterService.Counter;
  }

  increaseCounter(){
    this.counterService.increaseCounter();
  }

}
