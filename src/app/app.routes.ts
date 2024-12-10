import { Routes } from '@angular/router';
import { MasterComponent } from './Components/master/master.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ClientComponent } from './Components/client/client.component';
import { ClientProjectComponent } from './Components/client-project/client-project.component';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { authGuard } from './Services/guard/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'master',
                component: MasterComponent,
                canActivate:[authGuard]
            },
            {
                path:'employee',
                component: EmployeeComponent,
                canActivate:[authGuard]
            },
            {
                path:'client',
                component: ClientComponent,
                canActivate:[authGuard]
            },
            {
                path:'client-project',
                component: ClientProjectComponent,
                canActivate:[authGuard]
            }
        ]
    },
    
];
