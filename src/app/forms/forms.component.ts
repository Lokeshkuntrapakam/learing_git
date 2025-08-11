import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  course:any;
  find_loop_data:any =[1,2,3,4,5];
  pick_value:any="";
  isempty:boolean=false;
  
  ngOnInit(): void { 
    this.course="Angular";  
    
  }
  
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  math_loopdata(data:any){ 
    console.log("this is data",data);
    var dd=data.toString(); 
    const rd=this.peopleData.find((item:any)=> String(item.id)=== dd);
    console.log("tuisd c",rd);  
  }

  matching_data: any[] = [];

  loop_data(event: Event): void {
    console.log("thisis mmm loop",event);
    
      const inputElement = event.target as HTMLInputElement;
      const data = inputElement.value;

      const result = this.peopleData?.find((item: any) => String(item.id) === data.toString());
      
      console.log("skadc", data); 
  
      if (result && !this.matching_data.some((item: any) => String(item.id) === data)) {
          this.matching_data.push(result);
      }
  
      console.log("fjdvd", this.matching_data);
      this.math_loopdata(data);
  }
  
  list_data=['A','B','C','D',"E","F"];
  pusmetond(){ 
    console.log(); 
    const dd=this.myControl.value ?? "";
    if(dd.trim() !== ''){
     if(!this.list_data.includes(dd)){
      this.list_data.push(dd);
      this.myControl.setValue("");
     }
    } 
  } 
  popmethod(){
    this.list_data.pop();
  }
  getlast(){
    var dd =this.list_data.length-1
    this.pick_value=this.list_data[dd];
    console.log(this.list_data[dd]);
  }
  checkempty(){
    if(this.list_data.length > 0){
      this.isempty=false
    }
    else if(this.list_data.length == 0){
      this.isempty=true
    }
  }

  peopleData = [
    {"id": 1, "name": "John Doe", "age": 28, "country": "USA", "phone": "+1-202-555-0101"},
    {"id": 2, "name": "Maria Garcia", "age": 34, "country": "Spain", "phone": "+34-601-123-456"},
    {"id": 3, "name": "Liam Smith", "age": 22, "country": "Canada", "phone": "+1-416-555-0192"},
    {"id": 4, "name": "Sophia Rossi", "age": 29, "country": "Italy", "phone": "+39-349-456-7890"},
    {"id": 5, "name": "Yu Wang", "age": 40, "country": "China", "phone": "+86-10-8888-7777"},
    {"id": 6, "name": "Oliver Brown", "age": 31, "country": "UK", "phone": "+44-7700-900123"},
    {"id": 7, "name": "Emma Müller", "age": 25, "country": "Germany", "phone": "+49-151-234-5678"},
    {"id": 8, "name": "Lucas Silva", "age": 36, "country": "Brazil", "phone": "+55-21-99999-8888"},
    {"id": 9, "name": "Aisha Khan", "age": 27, "country": "Pakistan", "phone": "+92-300-1234567"},
    {"id": 10, "name": "Kaito Tanaka", "age": 33, "country": "Japan", "phone": "+81-3-1234-5678"},
    {"id": 11, "name": "Nina Ivanova", "age": 24, "country": "Russia", "phone": "+7-495-123-4567"},
    {"id": 12, "name": "Luca Moretti", "age": 38, "country": "Italy", "phone": "+39-333-987-6543"},
    {"id": 13, "name": "Amara Abebe", "age": 30, "country": "Ethiopia", "phone": "+251-91-234-5678"},
    {"id": 14, "name": "Chloe Martin", "age": 26, "country": "France", "phone": "+33-6-12-34-56-78"},
    {"id": 15, "name": "Mohammed Hassan", "age": 32, "country": "Saudi Arabia", "phone": "+966-5-1234-5678"},
  ]; 





}
