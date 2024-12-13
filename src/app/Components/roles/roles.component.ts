import { Component, OnInit } from '@angular/core';
import { MasterComponent } from '../master/master.component';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../../Model/Interface/role';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoleService } from '../../Services/role/role.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [MasterComponent, CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  newRole:string = "";

  constructor(private http: HttpClient, private roleService: RoleService){
    
  }

  onAddRole(){
    if(this.newRole.length > 0){
      this.roleService.AddRole(this.newRole).subscribe((res: any)=>{
        alert(res.message);
        this.getAllRoles();
      });
    }
  }

  ngOnInit(): void {    
    this.getAllRoles();    
  }

  getAllRoles(){
    this.roleService.getAllRoles().subscribe((data: IRole[]) =>{
      this.roleList = data;
    })
  }
}
