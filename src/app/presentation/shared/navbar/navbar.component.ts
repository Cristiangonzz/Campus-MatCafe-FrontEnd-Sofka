import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INotification } from 'src/app/domain/interfaces/notification.interface.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  delegateLogin = loginUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;
  isAdmin?: boolean;
  photo!: string;
  name!: string;
  rol!: string;
  notification: INotification[] = {} as INotification[];
  tamanio: number = 0;
  rolBoolean: boolean = false;
  constructor(private router : Router) {}
  ngOnInit(): void {
    this.delegateLogin.hasUserUseCaseProvider
      .useFactory()
      .statusEmmit.subscribe((status: boolean) => {
        this.isAdmin = status;
        this.photo = localStorage.getItem('photoUrl') || '';
        this.name = localStorage.getItem('name') || '';
        this.rol = localStorage.getItem('rol') || '';
        if (this.rol == 'true') {
          this.rolBoolean = true;
        }
      });

      this.delegateAdmin.hasNotificationUseCaseProvider.useFactory().execute();
      this
        .delegateAdmin
          .hasNotificationUseCaseProvider
            .useFactory()
              .statusRolEmmit.subscribe((status: INotification[]) => {
                this.notification = status;
                this.tamanio = this.notification.length ;
              });
  }

  out() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  inicio(){
    this.router.navigate(['/home']);
  }
  createUser(){
    this.router.navigate(['admin/create']);
  }
  course(){
    this.router.navigate(['course/get-all']);
  }
  route(){
    this.router.navigate(['route/get-all']);
  }
  learnerSubscribe(){
    this.router.navigate(['learner/suscribe-route']);
  }
  send(){
    this.router.navigate(['admin/send']);
  }
}
