import { Component, inject, OnInit } from '@angular/core';
import { ClientProject } from '../../Model/Class/ClientProject';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../Services/client/client.service';
import { APIResponseModel, Employee } from '../../Model/Interface/role';
import { Client } from '../../Model/Class/Client';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  projectForm:FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
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

  clientServ = inject(ClientService);

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.clientServ.getAllEmployees().subscribe((res:APIResponseModel)=>{
      this.employeeList = res.data;
    });
  }

  getAllClient(){
    this.clientServ.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    });
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    console.log(formValue);
    
    debugger;
    this.clientServ.addUClientProjectpdate(formValue).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Project Created Successfully!");
      }
      else{
        alert(res.message);
      }
    });
  }
}
