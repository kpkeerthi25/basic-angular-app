import { Component, Input, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() element: User;
  @Input() index: number;
  userName: string = '';

  editFlag: Boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  deleteUser() {
    this.userService.deleteUser(this.index);
  }

  editUserName() {
    this.editFlag = !this.editFlag;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onNameChange() {
    this.userService.changeUserName(this.index, this.userName);
    this.editFlag = !this.editFlag;
  }
}
