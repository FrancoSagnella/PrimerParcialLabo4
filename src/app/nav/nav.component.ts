import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onLogout() {
    try{
      await this.authSvc.logout();
      this.router.navigateByUrl('/login');
    }
    catch(e:any){
      console.log(e)
    }
  }
}
