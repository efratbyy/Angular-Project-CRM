import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email!: string;

  constructor(private router: Router, private us: UserService) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email') as string;
  }

  logout(){
    this.us.logout()
    .then(() => {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('isLoggedIn');
      this.router.navigateByUrl('login');
    })
    .catch((err) => console.log(err));
  }
}
