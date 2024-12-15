import { Component, inject, OnInit } from '@angular/core';
import { Project } from '../../Model/Class/Project';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../Services/client/client.service';
import { Client } from '../../Model/Class/Client';
import { Constant } from '../../Constant/Constant';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { EmployeeService } from '../../Services/employee/employee.service';
import { Employee } from '../../Model/Class/Employee';
import { ProjectService } from '../../Services/project/project.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, AlertComponent, DatePipe, FormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  // projectForm:FormGroup = new FormGroup({
  //   projectId: new FormControl(0),
  //   name: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   startDate: new FormControl(''),                                                                    
  //   endDate: new FormControl(''),
  //   description: new FormControl(''),
  //   status: new FormControl(''),
  //   leaderId: new FormControl(''),
  //   clientId: new FormControl(''),
  //   budget: new FormControl(''),
  // });

  projectObj: Project = new Project();

  projectList: Project[] = [];
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  requiredMessage: string = Constant.VALIDATION_MESSAGE.REQUIRED;

  clientServ = inject(ClientService);
  employeeService = inject(EmployeeService);
  projectService = inject(ProjectService);

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
    this.getAllProject();
  }

  getAllEmployee(){
    this.employeeService.getAllEmployees().subscribe((res:Employee[])=>{
      this.employeeList = res;
    });
  }

  getAllClient(){
    this.clientServ.getAllClients().subscribe((res:Client[])=>{
      this.clientList = res;
    });
  }

  getAllProject(){
    this.projectService.getAllProjects().subscribe((res:Project[])=>{
      this.projectList = res;
      this.projectObj = new Project();
    });
   }

  onSaveProject(){
    
    // debugger;
     if(this.projectObj.projectId == 0){
      this.projectService.addProject(this.projectObj).subscribe((res:any)=>{
        if(res){
          alert("Project Created Successfully!");
          this.getAllProject();
        }
        else{
          alert("error");
        }
      });
    }
    else{
       this.projectService.updateProject(this.projectObj).subscribe((res:any)=>{
        alert(res.message);
        this.getAllProject();
       })
    }
  }

  onEdit(item: Project){
    this.projectObj = item;
  }
  onDelete(id:number){
    this.projectService.deleteProject(id).subscribe((res:any)=>{
      alert(res.messages);
      this.getAllProject();
    })
  }

  Reset(){
    this.projectObj = new Project();
  }
}
