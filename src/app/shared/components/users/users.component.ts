import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../modal/products';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr : Array<Iuser> = []
  selectedUserId !: string;
  constructor(
    private _usersServive : UsersService
  ) { }

  ngOnInit(): void {
    this.usersArr = this._usersServive.getAllUsers()
  }
  onUserSelect(id:string){
    this.selectedUserId = id
  }
}
