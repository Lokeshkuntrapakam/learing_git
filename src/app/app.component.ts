import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recall';
  showsecondinput:boolean=false;
  label=""; 
  course:string="java"; 
  constructor(private router: Router) { }
  

  onClick(value:any){
    this.router.navigate(['/forms']);
    if(value.length > 0){
      // alert(value)
      this.label=value
      this.showsecondinput=true  
      this.course="angular"
    }
    else{
      this.course="java"
    }
  }
  get_userdat(event:any){
    this.router.navigate(['']);
    // alert(event.target.value)
  }
}
