import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-cluster',
  templateUrl: './user-cluster.component.html',
  styleUrls: ['./user-cluster.component.css']
})
export class UserClusterComponent implements OnInit {

  userData: User[] = [];
  constructor(private userService: UserService) {
    this.userData = this.userService.userData;
    console.log(this.userData);
  }

  ngOnInit(): void {
  }

}
