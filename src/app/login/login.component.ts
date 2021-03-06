import { setWrapHostForTest } from '@angular/compiler-cli/src/transformers/compiler_host';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FirestoreService } from '../services/firestore.service';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../interfaces/usuarios/usuarios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  });
  public users:Usuario[] = [];

  constructor(private router:Router, private authSvc:AuthService,private firestore:FirestoreService) { }

  ngOnInit(): void {
    this.firestore.obtenerTodos('usuarios').subscribe((usersSnapshot) => {
      this.users = [];
      usersSnapshot.forEach((userData: any) => {
        let data = userData.payload.doc.data()

        this.users.push({
          email:data.email,
          password: data.password,
          perfil: data.perfil
        });
      })
    });
  }

  async iniciarSesion(){
    const {email, password} = this.loginForm.value;
    // if(this.login.iniciarSesion({email:email, password:password, perfil:''}))
    // {
    //   this.router.navigateByUrl('/bienvenida');
    // }
    // else{
    //   this.router.navigateByUrl('/error');
    // }
    try{

      const user = await this.authSvc.login(email, password);
      if(typeof(user) !== 'string'){
        this.router.navigateByUrl('/bienvenida');
      }
    }
    catch(e)
    {
      console.log(e);
    }

  }
  seleccionarUsuario(email:string, password:string){
    this.loginForm.setValue({email:email, password:password});
  }
}
