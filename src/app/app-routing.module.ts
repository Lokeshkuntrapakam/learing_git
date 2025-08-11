import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [ 
 { path: '', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
