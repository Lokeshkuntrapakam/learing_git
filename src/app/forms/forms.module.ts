import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { InputsComponent } from './inputs/inputs.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsComponent,
    InputsComponent, 
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,  
    ReactiveFormsModule

  ]
})
export class FormsModule { }
