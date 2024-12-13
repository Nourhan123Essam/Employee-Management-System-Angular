import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: ''
  };
  router = inject(Router);

  onLogin(){
    if(this.loginObj.email == 'admin@gmai.com' && this.loginObj.password == '112233'){
      this.router.navigateByUrl('/master');
      localStorage.setItem('empErpUser', this.loginObj.email);
    }
    else{
      alert('Wrong Credentials');
    }
  }
}
