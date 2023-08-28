import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){

  }
  email: string = ""
  password: string = ""

  validToken(){
    if(this.email != "test@gmail.com" || this.password != "test"){
      alert("CUIDADO!!!!!")
      localStorage.setItem("key","false")
    }
    else{
      this.router.navigate(['/cargaDedatos'])
      localStorage.setItem("key","true")
    }
  }
}
