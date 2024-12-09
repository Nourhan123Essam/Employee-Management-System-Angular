import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../Model/Class/Client';
import { APIResponseModel } from '../../Model/Interface/role';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel>{    
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClients");
  }

  getAllEmployees(): Observable<APIResponseModel>{    
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllEmployee");
  }

  addUpdate(obj:Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj);
  }
  deleteClientById(id: number): Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }

  addUClientProjectpdate(obj:Client): Observable<APIResponseModel>{
    console.log(environment.API_URL + "AddUpdateClientProject");
    
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj);
  }
}
