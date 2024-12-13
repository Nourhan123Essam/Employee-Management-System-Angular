import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDesignation } from '../../Model/Interface/role';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

   constructor(private http: HttpClient) {}
  
    getAllDesignations(): Observable<IDesignation[]>{
      return this.http.get<IDesignation[]>(environment.API_URL + 'designation');
    }
  
    AddDesignation(name: string):Observable<any>{
      const designationDto = { name };
      return this.http.post<any>(environment.API_URL + 'designation', designationDto);
    }
}
