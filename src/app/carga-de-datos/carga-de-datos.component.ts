import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carga-de-datos',
  templateUrl: './carga-de-datos.component.html',
  styleUrls: ['./carga-de-datos.component.css'] 
})
export class CargaDeDatosComponent {
  constructor(private router: Router){}    
  verificacion(){
    if(localStorage.getItem("key") == "true"){
      this.router.navigate(['/main']);
    }else{
     alert("No!!!!!!!!!!!!!!1")
    }
  }
}
