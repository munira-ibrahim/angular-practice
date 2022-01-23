import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, observable, of, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {debounce, debounceTime, distinct, map, mergeMap, take, takeUntil} from 'rxjs/operators'

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements AfterViewInit,DoCheck {
 
  
  @ViewChild("search") searchInput : ElementRef;
  //search$ = new Observable<any>();

  repoNames = []
  ngDoCheck(): void {
    
  }
 
  ngAfterViewInit(): void {
    
    const source$ = fromEvent(this.searchInput.nativeElement, "input");
    source$.pipe(
      debounceTime(1000),
      map((eventdata : any) => eventdata.target.value),
      mergeMap((searchTerm : string) => {
        return ajax.getJSON(`https://api.github.com/users/${searchTerm}/repos`)
      }),
      // mergeAll()
    )
    .subscribe((repos : Array<any>) => {
      repos.forEach(repo => {
        this.repoNames.push(repo.name)
      })
    })
     

  }
  
  // take$ = interval(1000);
  // notifier$ = new Observable<any>();
  // @ViewChild('takeuntil') btn : ElementRef;

  // number = [1,2,3,1,4,2,5,7,8,7,6];
  // number$ = from(this.number);



  
  // ngAfterViewInit(): void {
  //   this.notifier$ = fromEvent(this.btn.nativeElement,"click");

  //   this.number$.pipe(
  //     //take(5)
  //     //takeUntil(this.notifier$)
  //     distinct()
  //   ).subscribe(console.log)
    
  // }
  

  // @ViewChild("btnObservable") btn : ElementRef<any>;
  // @ViewChild("txtinput") txtfield : ElementRef<HTMLInputElement>;
  // //timer
  // source$ = interval(1000)

  // fruits = ["apple","banana","oranges"]

  // //from operator
  // source2$ = from(this.fruits);

  // source3$ = of('hey','there!! I m',"using whatsapp.",true);

  // obs$ = new Observable((observer)=>{
    
  //   setTimeout(() => {
  //     observer.next("First data");
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next("Second data");
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 3000);
  // })

  // displayData(){
  //   this.obs$.subscribe({
  //     next : (data)=>{console.log(data)},
  //     error : (err) => {console.log(err)},
  //     complete : () => {console.log("[Completed]")}
  //   })

  // }

  // //Unsubscribe observable
  // unSub$ : Subscription;

  // // source4$ = fromEvent(document,"click");
  // // constructor() { 
  // //   this.source4$.subscribe(
  // //     (eventData)=> {console.log(eventData);}
  // //   )
  // // }

  // ngOnInit(): void {

  // }

  // ngAfterViewInit(): void{
  //   let source6$ = fromEvent(this.btn.nativeElement,"click")
  //   source6$.subscribe((data)=>{
  //     console.log(data);
  //   })

  //   let source7$ = fromEvent(this.txtfield.nativeElement,"keyup")
  //   source7$.subscribe(console.log)

  // }

  // OnSubscribe(){

  //   this.unSub$ = this.source$.subscribe({
  //     next: data =>{console.log(data)},  //called when data is emmited on stream
  //     error : err => {},  //called when 
  //     complete : () => {  //called when data streaming is completed
  //       console.log("[Completed]");
  //     }
  //   })

  // }

  // OnUnSubscribe(){
  //     this.unSub$.unsubscribe();
  // }


}
