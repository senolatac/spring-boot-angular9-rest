import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rest';
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  logOut() {
    this.userService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
