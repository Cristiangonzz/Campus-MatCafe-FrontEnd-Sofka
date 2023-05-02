import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { INotification } from 'src/app/domain/interfaces/notification.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit  {
  delegateLogin = loginUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;
  isAdmin?: boolean;
  photo!: string;
  name!: string;
  rol!: string;
  notification: INotification[] = {} as INotification[];
  tamanio: number = 0;
  rolBoolean: boolean = false;
  constructor(private router : Router,private readonly adminService: AdminService) {}
 

  ngOnInit(): void {
    this.delegateLogin.hasUserUseCaseProvider
    .useFactory()
    .execute();
    this.delegateLogin.hasUserUseCaseProvider
      .useFactory()
      .statusEmmit.subscribe((status: boolean) => {
        this.isAdmin = status;
        this.photo = localStorage.getItem('photoUrl') || '';
        this.name = localStorage.getItem('name') || '';
        this.rol = localStorage.getItem('rol') || '';
        if (this.rol === "true") {
          this.rolBoolean = true;
          
          this.refreshNotificacion();
        }else{
          this.rolBoolean = false;
        }
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
  refreshNotificacion(){
    console.log(localStorage.getItem('email') || '')
    this
    .delegateAdmin
      .hasNotificationUseCaseProvider
        .useFactory(this.adminService)
          .execute();
  this
    .delegateAdmin
      .hasNotificationUseCaseProvider
        .useFactory(this.adminService)
          .statusRolEmmit.subscribe((status: INotification[]) => {
            this.notification = status;
            this.tamanio = this.notification.length ;
          });
  }
}
