import { Component, OnInit } from '@angular/core';
import { MasterComponent } from '../master/master.component';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel, IRole } from '../../Model/Interface/role';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [MasterComponent, CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];

  //http = inject(HttpClient); //different way to declare http rather than in constructor
  constructor(private http: HttpClient){
    console.log("Start");
    
  }

  ngOnInit(): void {
    console.log("entered");
    
    this.getAllRoles();
    console.log(this.roleList);
    
  }

  getAllRoles(){
    //to fetch the data run the project on port 4209 because of CORS erorrs
    this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res: APIResponseModel)=>{
      this.roleList = res.data;
    });
  }
}
