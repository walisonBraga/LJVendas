import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerFrom!: FormGroup;

  constructor(
    private auth: AuthService,
    private register: RegisterService,
    private router: Router) {
    this.registerFrom = new FormGroup({
      name: new FormControl,
      email: new FormControl,
      password: new FormControl
    });
  }

  ngOnInit(): void { }

  async ngSubmit() {
    if (this.registerFrom.invalid) return;
    const userRegister = await this.auth.register(this.registerFrom.get('email')?.value,
      this.registerFrom.get('password')?.value);
    const body = {
      ...this.registerFrom.value,
      'uid': userRegister.user.uid
    }
    const formRef = await this.register.addRegister(body);
    this.registerFrom.reset();
    this.router.navigate(['/login']);
  }

}
