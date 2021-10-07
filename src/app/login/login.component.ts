import { setWrapHostForTest } from '@angular/compiler-cli/src/transformers/compiler_host';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


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
  constructor(private router:Router, private login:LoginService) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    const {email, password} = this.loginForm.value;
    if(this.login.iniciarSesion({email:email, password:password, perfil:''}))
    {
      this.router.navigateByUrl('/bienvenida');
    }
    else{
      this.router.navigateByUrl('/error');
    }

  }
}
