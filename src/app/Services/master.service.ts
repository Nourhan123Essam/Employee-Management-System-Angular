import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations(): Observable<any>{
    return this.http.get<any>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation");
  }
}

