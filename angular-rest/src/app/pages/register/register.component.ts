import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.userService.currentUserValue) {
      this.router.navigate(['/profile']);
      return;
    }
  }

  register() {
    this.userService.register(this.user).subscribe(data => {
      this.router.navigate(['/profile']);
    }, err => {
      if (err && err.status === 409) {
        this.errorMessage = 'Username is already exist';
      } else {
        this.errorMessage = 'Unexpected error occurred. Error is: ' + err;
      }
    });
  }

}
