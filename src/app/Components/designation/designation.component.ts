import { Component, inject, OnInit } from '@angular/core';
import { IDesignation } from '../../Model/Interface/role';
import { FormsModule } from '@angular/forms';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { DesignationService } from '../../Services/designation/designation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-designation',
  imports: [FormsModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  isLoader: boolean = true;
  designationList: IDesignation[] = [];
  designationService = inject(DesignationService);
  newDesignation: string = "";

  ngOnInit(): void {
    this.getAllDesignations();
  }

  
    constructor(private http: HttpClient){
      
    }
  
    onAddDesignation(){
      if(this.newDesignation.length > 0){
        this.designationService.AddDesignation(this.newDesignation).subscribe((res: any)=>{
          alert(res.message);
          this.getAllDesignations();
        });
      }
    }
  
   
    getAllDesignations(){
      this.designationService.getAllDesignations().subscribe((data: IDesignation[]) =>{
        this.designationList = data;
      }, error=>{
        alert("API erorr / Network down");
      });
      this.isLoader = false;
    }
}
