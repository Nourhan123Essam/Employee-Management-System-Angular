
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;
}

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private API_URL = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  // Get all clients
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.API_URL);
  }

  // Add a new client
  addClient(client: Partial<Client>): Observable<Client> {
    return this.http.post<Client>(this.API_URL, client);
  }

  // Update an existing client
  updateClient(client: Partial<Client>): Observable<Client> {
    return this.http.put<Client>(`${this.API_URL}/${client.clientId}`, client);
  }

  // Delete a client
  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${clientId}`);
  }
}
