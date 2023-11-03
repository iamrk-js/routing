import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/modal/products';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId!: string;
  userObj!: Iuser;
  constructor(
    private _route: ActivatedRoute,
    private _usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getIdAndUserDetails();
  }


  getIdAndUserDetails(){
     //  this.userId = this._route.snapshot.params['userId'];
    //   if(this.userId){
    //     this.userObj = this._usersService.getUser(this.userId)
    //   }

    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.userId = params['userId'];
        if(this.userId){
          this.userObj = this._usersService.getUser(this.userId)
        }
    });
  }
}
