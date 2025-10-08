import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/config/api.config';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Loginform: FormGroup;
  unSubscribe$ = new Subject();
  hide: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private apiservice: ApiService, private toast: ToastrService) {
    this.Loginform = this.fb.group({
      emailId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      isManager: new FormControl(true, Validators.required),
    })
  }

  submit() {
    const loginform = this.Loginform.valid;
    if (loginform) {
      this.login();
    }
  }

  login() {
    this.apiservice.post(URLS.login, this.Loginform.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res.status == true) {
        localStorage.setItem('userDetails', res?.userName);
        this.toast.success(res.message, 'Login Successfully');
        this.router.navigate(['/admin/dashboard'])
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }
}
