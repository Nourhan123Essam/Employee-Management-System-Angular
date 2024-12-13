import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../Model/Class/Client';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../../Constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]>{    
    return this.http.get<Client[]>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT);
  }

  addUpdate(obj: Partial<Client>): Observable<Client> {
    debugger;
    if (!obj.clientId || obj.clientId === 0) {
      // Adding a new client
      return this.http.post<Client>(environment.API_URL + "client", obj);
    } else {
      // Updating an existing client
      return this.http.put<any>(environment.API_URL + `client/${obj.clientId}`, obj);
    }
  }
  
  deleteClientById(id: number): Observable<any>{
    return this.http.delete<any>(environment.API_URL + `client/${id}`);
  }
 
}
