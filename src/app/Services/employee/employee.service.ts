import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRole } from '../../Model/Interface/role';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../Model/Class/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}
  
    getAllEmployees(): Observable<Employee[]>{
      return this.http.get<Employee[]>(environment.API_URL + 'employee');
    }
  
    addEmployee(obj: Employee):Observable<any>{
      const employeeDto = obj;
      return this.http.post<any>(environment.API_URL + 'employee', employeeDto);
    }

    deleteEmployee(id: string):Observable<any>{
      return this.http.delete<any>(environment.API_URL + `employee/${id}`);
    }

    updateEmployee(obj: Employee):Observable<any>{
      return this.http.put<any>(environment.API_URL + `employee/${obj.employeeId}`, obj);
    }
}
