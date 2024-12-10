import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterComponent } from './Components/master/master.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ClientComponent } from './Components/client/client.component';
import { LayoutComponent } from "./Components/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, RouterLink, RouterLinkActive, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee-Management-system';
}
