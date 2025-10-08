import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { userRolelist } from 'src/app/config/admin-table.config';
import { URLS } from 'src/app/config/api.config';
import { ITABLE_MODAL } from 'src/app/interface/table-interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-userrolelist',
  templateUrl: './userrolelist.component.html',
  styleUrls: ['./userrolelist.component.scss']
})
export class UserrolelistComponent implements OnInit {

tableModel: ITABLE_MODAL[] = userRolelist;
userroleList: any;
unSubscribe$ = new Subject();
  RoleList: any;

  constructor(private apiservice: ApiService, private toast: ToastrService, public router: Router,) { }

  ngOnInit(): void {
    this.getUserroleData();
    this.GetallRoles()
  }

    GetallRoles() {
    this.apiservice.post(URLS.getRolls, {}).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.RoleList = res;
      } else {
        this.toast.error(res.message, 'Error');
      }
    });
  }
  getUserroleData() {
    this.apiservice.post(URLS.GetuserRole, {}).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.userroleList = res;
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }
}
