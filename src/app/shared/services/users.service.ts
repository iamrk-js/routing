import { Injectable } from '@angular/core';
import { Iuser } from '../modal/products';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray : Array<Iuser> = [
    {
      userName: 'Jhon',
      userId: '1',
      userRole : "admin"
    },
    {
      userName: 'June',
      userId: '2',
      userRole : "user"
    },
    {
      userName: 'May',
      userId: "3",
      userRole : "admin"
    },
    {
      userName: 'James',
      userId: "4",
      userRole : "user"
    },
    {
      userName : "July",
      userId : "5",
      userRole : "admin"
    },
  ];
  constructor() { }

  getAllUsers(): Array<Iuser>{
    return this.usersArray
  }

  getUser(id:string) : Iuser{
    return this.usersArray.find(user => user.userId === id)!
  }

  createNewUser(userObj : Iuser){
    this.usersArray.push(userObj)
  }

  updateUser(userObj: Iuser){
   let getIndex = this.usersArray.findIndex(user => user.userId === userObj.userId);
   this.usersArray[getIndex].userName = userObj.userName;
   this.usersArray[getIndex].userRole = userObj.userRole;
  }
}
