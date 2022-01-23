import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  pageNo : string;

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
        this.pageNo = params['pageNo']
    })
  }

}
