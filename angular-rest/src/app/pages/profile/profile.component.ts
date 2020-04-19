import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {Role} from '../../models/role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // OR
    // this.currentUser = this.userService.currentUserValue;
  }

  ngOnInit(): void {
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    this.userService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  changeRole() {
    const newRole = this.currentUser.role === Role.ADMIN ? Role.USER : Role.ADMIN;
    this.userService.changeRole(this.currentUser.username, newRole).subscribe(data => {
      this.currentUser.role = data.role;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    });
  }

}
