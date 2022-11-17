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
    firstName: new FormControl ('', Validators.required),
    lastName: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.required),
    age: new FormControl (null, Validators.required),
    phoneNumber: new FormControl ('', Validators.required)
    // password: new FormControl <number | string>('', {nonNullable:true}),
  })

  get firstName() {
    return this.loginform.get("firstName");
  }
  get lastName() {
    return this.loginform.get("lastName");
  }
  get email() {
    return this.loginform.get('email')
  }
  get age() {
    return this.loginform.get("age");
  }
  get phoneNumber() {
    return this.loginform.get("phoneNumber");
  }

  setFormControlAsInvalid(controlName: string): void {
    switch (controlName) {
      case 'firstName':
        this.loginform.controls['firstName'].setErrors({'incorrect': true});
        break;
      case 'lastName':
        this.loginform.controls['lastName'].setErrors({'incorrect': true});
        break;
      case 'email':
        this.loginform.controls['email'].setErrors({'incorrect': true});
        break;
      case 'age':
        this.loginform.controls['age'].setErrors({'incorrect': true});
        break;
      case 'phoneNumber':
        this.loginform.controls['phoneNumber'].setErrors({'incorrect': true});
    }
  }  

  validateFirstName(): boolean {
    if (this.firstName === null || this.firstName.value?.valueOf() === undefined) {
      this.errors.firstName = "ERROR: The form control was returned as null";
      this.setFormControlAsInvalid('firstName');
      return false;
    } else if (this.firstName.value === "") {
      this.errors.firstName = "First name is required";
      this.setFormControlAsInvalid('firstName');
      return false;
    } else if (this.firstName.value.length < 2) {
      this.errors.firstName = "First name must be between 2 and 16 characters";
      this.setFormControlAsInvalid('firstName');
      return false;
    } else if (this.firstName.value.length > 16) {
      this.errors.firstName = "First name must be between 2 and 16 characters";
      this.setFormControlAsInvalid('firstName');
      return false;
    } else if (!this.firstName.value.match('^[a-zA-Z]+$')) {
      this.errors.firstName = "First name may only contain letters";
      this.setFormControlAsInvalid('firstName');
      return false;
    } else {
      this.errors.firstName = "";
      return true;
    }
  }

  validateLastName(): boolean {
    if (this.lastName === null || this.lastName.value?.valueOf() === undefined) {
      this.errors.lastName = "ERROR: The form control was returned as null";
      this.setFormControlAsInvalid('lastName');
      return false;
    } else if (this.lastName.value === "") {
      this.errors.lastName = "Last name is required";
      this.setFormControlAsInvalid('lastName');
      return false;
    } else if (this.lastName.value.length < 2) {
      this.errors.lastName = "Last name must be between 2 and 16 characters";
      this.setFormControlAsInvalid('lastName');
      return false;
    } else if (this.lastName.value.length > 16) {
      this.errors.lastName = "Last name must be between 2 and 16 characters";
      this.setFormControlAsInvalid('lastName');
      return false;
    } else if (!this.lastName.value.match('^[a-zA-Z]+$')) {
      this.errors.lastName = "Last name may only contain letters";
      this.setFormControlAsInvalid('lastName');
      return false;
    } else {
      this.errors.lastName = "";
      return true;
    }
  }

  validateEmail(): boolean {
    if (this.email === null) {
      this.errors.email = "ERROR: The form control was return as null";
      this.setFormControlAsInvalid('email');
      return false;
    } else if (this.email.value === "") {
      this.errors.email = "Email is required";
      this.setFormControlAsInvalid('email');
      return false;
    } else if (!this.email.value?.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      this.errors.email = "Email address not valid";
      this.setFormControlAsInvalid('email');
      return false;
    } else {
      this.errors.email = "";
      return true;
    }
  }

  validateAge(): boolean {
    if (this.age === null) {
      this.errors.age = "ERROR: The form control was return as null";
      this.setFormControlAsInvalid('age');
      return false;
    } else if (this.age.value === null) {
      this.errors.age = "Age is required";
      this.setFormControlAsInvalid('age');
      return false;
    } else if (this.age.value < 0) {
      this.errors.age = "That age is impossible";
      this.setFormControlAsInvalid('age');
      return false;
    } else if (this.age.value < 18) {
      this.errors.age = "You must be at least 18 years old to use this form";
      this.setFormControlAsInvalid('age');
      return false;
    } else if (this.age.value >= 100) {
      this.errors.age = "Wow, really?";
      return true;
    } else {
      this.errors.age = "";
      return true;
    }
  }

  validatePhoneNumber(): boolean {
    if (this.phoneNumber === null || this.phoneNumber.value?.valueOf() === undefined) {
      this.errors.phoneNumber = "ERROR: The form control was return as null";
      this.setFormControlAsInvalid('age');
      return false;
    } else if (this.phoneNumber.value.length !== 10) {
      this.errors.phoneNumber = "Phone number must be 10 characters long";
      this.setFormControlAsInvalid('phoneNumber');
      return false;
    } else if (!this.phoneNumber.value.match('^[0-9]+$')) {
      this.errors.phoneNumber = "Phone number can only contain numbers";
      this.setFormControlAsInvalid('phoneNumber');
      return false;
    } else {
      this.errors.phoneNumber = "";
      return true;
    }
  }

  validate(): boolean {
    let firstNameValid = this.validateFirstName();
    let lastNameValid = this.validateLastName();
    let emailValid = this.validateEmail();
    let ageValid = this.validateAge();
    let phoneNumberValid = this.validatePhoneNumber();

    if (firstNameValid && lastNameValid && emailValid && ageValid && phoneNumberValid) {
      return true;
    } else {
      return false;
    }
  }

  submitted = false;
  errors = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    phoneNumber: ""
  }

  onSubmit() {
    if (this.validate()) {
      this.submitted = true;
    } else {
      this.submitted = false;
    }
    
  }
}
