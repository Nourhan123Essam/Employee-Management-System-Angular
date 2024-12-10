import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../Services/master.service';
import { IDesignation } from '../../Model/Interface/role';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [FormsModule, CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  isLoader: boolean = true;
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:any)=>{
      this.designationList = result.data;
      this.isLoader = false;
    }, error=>{
      alert("API erorr / Network down");
      this.isLoader = false;
    })
  }
}
