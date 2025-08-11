import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { InputsComponent } from './inputs/inputs.component';

const routes: Routes = [
  { path: '', component: FormsComponent }, 
  { path: 'input', component: InputsComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule implements OnInit {


  ngOnInit(): void { 

  } 


 

}
