import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList: Array<User>;
  currentUser: User;
  errorMessage: string;
  infoMessage: string;

  constructor(private adminService: AdminService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers() {
    this.adminService.findAllUsers().subscribe(data => {
      this.userList = data;
    });
  }

  delete(user: User, ind: number) {
    this.adminService.delete(user.id).subscribe(data => {
      this.userList.splice(ind, 1);
      this.infoMessage = 'Mission is completed.';
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
    });
  }

}
