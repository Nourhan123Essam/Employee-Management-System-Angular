import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../Model/Class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../Services/client/client.service';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from "../../reusableComponents/my-button/my-button.component";
import { EmployeeService } from '../../Services/employee/employee.service';
import { DesignationService } from '../../Services/designation/designation.service';
import { RoleService } from '../../Services/role/role.service';
import { IDesignation, IRole } from '../../Model/Interface/role';
import { Employee } from '../../Model/Class/Employee';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AlertComponent, MyButtonComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  designationService = inject(DesignationService);
  employeeService = inject(EmployeeService);
  roleService = inject(RoleService);

  roleList: IRole[] = [];
  employeeList: Employee[] = [];
  designationList: IDesignation[] = []; 

  employeeObj: Employee = new Employee();
  ActiveEmployee: string = "false";

  ngOnInit(): void {
    this.loadRoles();
    this.loadEmployees();
    this.loadDesignations();
  }
  loadRoles(){
    this.roleService.getAllRoles().subscribe((res:IRole[])=>{
       this.roleList = res;

    });
  }
  loadDesignations(){
    this.designationService.getAllDesignations().subscribe((res:IDesignation[])=>{
       this.designationList = res;

    });
  }
  loadEmployees(){
    this.employeeService.getAllEmployees().subscribe((res:Employee[])=>{
       this.employeeList = res;

    });
  }
   onSaveEmployee(){
    
    this.employeeObj.isActive = (this.ActiveEmployee == "true")? true: false;
    this.ActiveEmployee = "false";
    
    if(this.employeeObj.employeeId == ''){
      this.employeeService.addEmployee(this.employeeObj).subscribe((res:any)=>{
        if(res){
          alert(res.message);
          this.loadEmployees();
          this.employeeObj = new Employee();
        }
        else{
          alert("error when saving!");
        }
      });
    }
    else{
      debugger;
      this.employeeService.updateEmployee(this.employeeObj).subscribe((res: any)=>{
        alert(res.message);
        this.loadEmployees();
        this.employeeObj = new Employee();
      })
    }
   }

  onDelete(employeeId:string){
    const isDelte = confirm("Are you sure want to delete");
    if(isDelte){
      debugger;
      this.employeeService.deleteEmployee(employeeId).subscribe((res:any)=>{
        if(res){
          alert(res.messages);
          this.loadEmployees();
          this.employeeObj = new Employee();
          this.ActiveEmployee = "false";
        }
        else{
          alert("erorr when deleting");
        }
      });
    }
  }

  onEdit(item: Employee){
     this.employeeObj = item;
     this.ActiveEmployee = item.isActive == true?"true":"false";
  }

  Reset(){
    this.employeeObj = new Employee();
  }
}
