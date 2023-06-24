import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void { }

  loginSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.loginForm.value['email'], this.loginForm.value['password'])
      .then((result) => {
        this.router.navigate(['/card']);
        return result;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    this.loginForm.reset();
  }

}
