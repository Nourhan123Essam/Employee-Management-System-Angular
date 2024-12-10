import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../Model/Class/Client';
import { Employee } from '../../Model/Interface/role';
import { environment } from '../../../environments/environment.development';
import { ClientProject } from '../../Model/Class/ClientProject';
import { Constant } from '../../Constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]>{    
    return this.http.get<Client[]>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT);
  }

  getAllEmployees(): Observable<Employee[]>{    
    return this.http.get<Employee[]>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP);
  }

  getAllClientProjects(): Observable<ClientProject[]> {
    return this.http.get<ClientProject[]>(environment.API_URL + `clientProjects`);
  }
  //////////////////////////////////////////////

  addUpdate(obj: Partial<Client>): Observable<Client> {
    debugger;
    if (!obj.clientId || obj.clientId === 0) {
      // Adding a new client
      return this.http.post<Client>(environment.API_URL + "clients", obj);
    } else {
      // Updating an existing client
      return this.http.put<Client>(environment.API_URL + `clients/${obj.clientId}`, obj);
    }
  }
  
  deleteClientById(id: number): Observable<Client>{
    return this.http.delete<Client>(environment.API_URL + `clients${id}`);
  }
  ///////////////////////////////////////////////

  addUClientProjectpdate(obj:ClientProject): Observable<ClientProject>{
    if (!obj.clientProjectId || obj.clientProjectId === 0) {
      // Adding a new client
      return this.http.post<ClientProject>(environment.API_URL + "clientProjects", obj);
    } else {
      // Updating an existing client
      return this.http.put<ClientProject>(environment.API_URL + `clientProjects/${obj.clientProjectId}`, obj);
    }
  }
}
