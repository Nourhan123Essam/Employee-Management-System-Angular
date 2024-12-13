import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterComponent } from './Components/master/master.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ClientComponent } from './Components/client/client.component';
import { LayoutComponent } from "./Components/layout/layout.component";
import { LoginComponent } from "./Components/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, RouterLink, RouterLinkActive, LayoutComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee-Management-system';
  isLogging: boolean;
  constructor(){
    this.isLogging = localStorage.getItem("empErpUser") == null? false: true;
    console.log(this.isLogging);
    
  }
}
