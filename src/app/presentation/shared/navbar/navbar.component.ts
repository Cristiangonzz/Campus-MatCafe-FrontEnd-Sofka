import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  photo!: string;
  name!: string;
  rol!: string;

  ngOnInit(): void {
    const photoStorage = localStorage.getItem('photoUrl');
    const nameStorage = localStorage.getItem('name');
    const rolStorage = localStorage.getItem('rol');
    this.rol = rolStorage === 'true' ? 'Admin' : 'Aprendiz';

    if (photoStorage) {
      this.photo = photoStorage;
    }
    if (nameStorage) {
      this.name = nameStorage;
    }
  
  }

  out(){
    localStorage.clear()
  }
}
