import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/modal/products';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm !: FormGroup;
  inEditMode: boolean = false;
  userId !: string; // undefined
  userObj !: Iuser;
  private _uuidService = inject(UuidService);
  private _userService = inject(UsersService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  constructor() { }

  ngOnInit(): void {

    this.createUserForm();
    this._route.params
      .subscribe((params: Params) => {
        console.log(params);
        this.userId = params['userId']
        if (this.userId) {
          this.inEditMode = true;
          this.userObj = this._userService.getUser(this.userId);
          this.userForm.patchValue(this.userObj)
        }
      })
  }


  createUserForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required])
    })
  }
  onUserCreate() {
    if (this.userForm.valid) {
      let obj: Iuser = { ...this.userForm.value, userId: this._uuidService.uuid() };
      console.log(obj);
      this._userService.createNewUser(obj);
      this.userForm.reset();
      this._router.navigate(['users']);
    }
  }

  onUserUpdate() {
    let updatedUser = { ...this.userForm.value, userId: this.userId };
    console.log(updatedUser);
    this._userService.updateUser(updatedUser);
    this._router.navigate(['users'])
  }

}
