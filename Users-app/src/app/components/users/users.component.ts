import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { USER_DATA } from "src/app/model/mocks";
import { User } from 'src/app/model/user.model';
import { CounterService } from "src/app/services/counter.service";
import { UserDataService } from "src/app/services/user-data.service";


@Component({
    selector: "app-users",
    templateUrl: `./users.component.html`,
    styleUrls: [`./users.component.css`],
    providers : [CounterService],
    encapsulation: ViewEncapsulation.Emulated  // shadowdom - Apply only local css 
})
export class UsersComponent {

    users : any;

    constructor(private dataService : UserDataService){

    }
  
    ngOnInit(): void {
        this.users = this.dataService.getUserData();
    }
  
    onMoreInfo(lastName : string, company : string){
      alert(`Mr. ${lastName} is working with ${company}`)
    }

    
  

    // @Input()
    // user : any

    
}