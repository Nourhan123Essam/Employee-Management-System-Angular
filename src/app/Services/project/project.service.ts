import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRole } from '../../Model/Interface/role';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../Model/Class/Employee';
import { Project } from '../../Model/Class/Project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   constructor(private http: HttpClient) {}
    
      getAllProjects(): Observable<Project[]>{
        return this.http.get<Project[]>(environment.API_URL + 'project');
      }
    
      addProject(obj: Project):Observable<any>{
        const projectDto = obj;
        return this.http.post<any>(environment.API_URL + 'project', projectDto);
      }
  
      deleteProject(id: number):Observable<any>{
        return this.http.delete<any>(environment.API_URL + `project/${id}`);
      }
  
      updateProject(obj: Project):Observable<any>{
        return this.http.put<any>(environment.API_URL + `project/${obj.projectId}`, obj);
      }
}
