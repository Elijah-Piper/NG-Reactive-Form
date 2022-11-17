import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

interface userdetails {
  username: FormControl<string>,
  password: FormControl<string>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form';
  loginform = new FormGroup({
    email: new FormControl ('', Validators.required),
    password: new FormControl <number | string>('', {nonNullable:true}),
  })

  get email() {
    return this.loginform.get('email')
  }
  // loginUser(){
  //   console.log(this.loginform.value)
  // }
}
