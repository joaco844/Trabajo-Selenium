import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = ""
  password: string = ""

  validToken(){
    if(this.email != "test@gmail.com" || this.password != "test"){
      alert("CUIDADO!!!!!")
      localStorage.setItem("key","false")
    }
    else{
      localStorage.setItem("key","true")
    }


  }
}
