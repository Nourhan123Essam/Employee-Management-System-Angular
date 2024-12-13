import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRole } from '../../Model/Interface/role';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<IRole[]>{
    return this.http.get<IRole[]>(environment.API_URL + 'role');
  }

  AddRole(name: string):Observable<any>{
    const roleDto = { name };
    return this.http.post<any>(environment.API_URL + 'role', roleDto);
  }

}
