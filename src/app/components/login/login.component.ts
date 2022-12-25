import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUsers = faUsers;
  user: User = {email: "", password: ""};

  constructor(
    private router: Router,
    private us: UserService
    ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    this.us.login(this.user)
    .then((data) => {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('email', data.user.email as string);
      this.router.navigateByUrl('customers');
    })
    .catch((err) => console.log(err))
  }

  loginWithGoogle(){
    this.us.loginGoogle()
    .then((data) => {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('email', data.user.email as string);
      this.router.navigateByUrl('customers');
    })
    .catch((err) => console.log(err));
  }
}
