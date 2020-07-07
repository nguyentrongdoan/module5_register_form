import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {count} from 'rxjs/operators';

// tslint:disable-next-line:typedef
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      country: this.fb.control('', Validators.required),
      pwGroup: this.fb.group({
        password: this.fb.control(''),
        confirmPassword: this.fb.control('')
      }, {validators: comparePassword}),
      age: this.fb.control('', Validators.min(18)),
      phone: this.fb.control('', Validators.pattern(/^\+84\d{9,10}$/))
    });
    // this.registerForm.patchValue({
    //   email: 'info@example.com',
    //   pwGroup: '123456'
    // });
  }
  // tslint:disable-next-line:typedef
  onSubmit(registerForm) {
    // this.registerForm.markAllAsTouched();
    console.log(registerForm);
  }
}
