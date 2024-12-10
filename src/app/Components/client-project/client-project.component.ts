import { Component, inject, OnInit } from '@angular/core';
import { ClientProject } from '../../Model/Class/ClientProject';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../Services/client/client.service';
import { Employee } from '../../Model/Interface/role';
import { Client } from '../../Model/Class/Client';
import { Constant } from '../../Constant/Constant';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  projectForm:FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    startDate: new FormControl(''),                                                                    
    expectedEndDate: new FormControl(''),
    leadByEmplId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientProjectObj: ClientProject = new ClientProject();
  clientProjectList: ClientProject[] = [];
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  requiredMessage: string = Constant.VALIDATION_MESSAGE.REQUIRED;

  clientServ = inject(ClientService);

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject();
  }

  getAllEmployee(){
    this.clientServ.getAllEmployees().subscribe((res:Employee[])=>{
      this.employeeList = res;
    });
  }

  getAllClient(){
    this.clientServ.getAllClients().subscribe((res:Client[])=>{
      this.clientList = res;
    });
  }

  getAllClientProject(){
    this.clientServ.getAllClientProjects().subscribe((res:ClientProject[])=>{
      this.clientProjectList = res;
    });
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    console.log(formValue);
    
    debugger;
    this.clientServ.addUClientProjectpdate(formValue).subscribe((res:ClientProject)=>{
      if(res){
        alert("Project Created Successfully!");
      }
      else{
        alert("error");
      }
    });
  }

  onEdit(intem: ClientProject){

  }
  onDelete(id:number){

  }
}
