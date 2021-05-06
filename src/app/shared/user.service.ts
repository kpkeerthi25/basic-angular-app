import { User } from './user.model';

export class UserService {
  userData: User[] = [
    {
      userName: 'wer',
      password: 'wer',
    },
  ];

  addUser(data: User) {
    this.userData.push(data);
  }

  deleteUser(data: number) {
    this.userData.splice(data, 1);
  }

  changeUserName(index: number, data: string) {
    this.userData[index].userName = data;
  }
}
