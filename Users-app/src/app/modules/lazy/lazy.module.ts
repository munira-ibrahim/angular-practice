import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponentComponent } from './components/lazy-component/lazy-component.component';
import { RouterModule, Routes } from '@angular/router';


const LAZY_ROUTES : Routes = [
  {path : "", component : LazyComponentComponent}       // http://localhost:4200/lazy
]

@NgModule({
  declarations: [
    LazyComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ]
})
export class LazyModule { }
