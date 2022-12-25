import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = { email: "", password: ""};

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.us
      .register(this.user)
      .then((data) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', data.user.email as string);
        this.router.navigateByUrl('customers');
      })
      .catch((err) => console.log(err));
  }
}
