import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onUpdatePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  createUser() {
    this.userService.addUser(new User(this.userName, this.password));
    document.getElementById('submit-modal').style.visibility = 'visible';
  }

  routeToUserPage() {
    document.getElementById('submit-modal').style.visibility = 'hidden';
    this.router.navigate(['user']);
  }
}
