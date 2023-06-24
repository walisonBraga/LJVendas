import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'login efetuado com sucesso ',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/card']);
        return result;
      }).catch((error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Email/Password Error',
          showConfirmButton: false,
          timer: 1500
        })
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    // this.loginForm.reset();
  }

}
