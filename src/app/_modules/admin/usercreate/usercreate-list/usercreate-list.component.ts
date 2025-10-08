import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { userlist } from 'src/app/config/admin-table.config';
import { URLS } from 'src/app/config/api.config';
import { ITABLE_MODAL } from 'src/app/interface/table-interface';
import { ApiService } from 'src/app/services/api.service';
import { DependencyService } from 'src/app/services/dependency-service';

@Component({
  selector: 'app-usercreate-list',
  templateUrl: './usercreate-list.component.html',
  styleUrls: ['./usercreate-list.component.scss']
})
export class UsercreateListComponent implements OnInit {
  tableModel: ITABLE_MODAL[] = userlist;
  userList: any;
  usernameList: any;
  userlistForm: FormGroup;
  unSubscribe$ = new Subject();

  constructor(public router: Router, private fb: FormBuilder, private apiservice: ApiService, private toast: ToastrService, public ds: DependencyService) {
    this.userlistForm = this.fb.group({
      pageNumber: [1],
      pageSize: [10],
      length: [0],
      userId: [0],
      userName: ['']
    });
    
  }

  ngOnInit(): void {
    this.getuserlistData();
    this.getusername();
  }

  // submitForm() {
  //   this.getuserlistData();
  //   this.userlistForm.reset();
  // }

  getusername() {
    const payload = {
      pageSize: 1000,
      pageNumber: 1,
      userId: 0,
      userName: '',
    }
    this.apiservice.post(URLS.userlist, payload).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.usernameList = res.response;
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

  getuserlistData() {
    this.apiservice.post(URLS.userlist, this.userlistForm.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.userList = res.response;
        // this.toast.success(res.message, 'Success');
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

    deletecheckList(id: any) {
    this.apiservice.post(`${URLS.DeleteUser}/${id}`, {}).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.getuserlistData();
        this.toast.success(res.message, 'Deleted Successfully');
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }
}
