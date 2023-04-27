import { Component, OnInit } from '@angular/core';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  delegateLogin = loginUseCaseProviders;
  isAdmin?: boolean ;
  photo!: string;
  name!: string;
  rol!: string;
  rolBoolean: boolean = false;
  ngOnInit(): void {
    this
    .delegateLogin
      .hasUserUseCaseProvider
        .useFactory()
          .statusEmmit
            .subscribe((status: boolean) => {
              this.isAdmin = status;
              this.photo = localStorage.getItem('photoUrl') || '';
              this.name = localStorage.getItem('name') || '';
              this.rol = localStorage.getItem('rol') || '';
              if(this.rol == 'true'){
                this.rolBoolean = true;
              }
          }
  );
  }

  out(){
    localStorage.clear()
  }
}
