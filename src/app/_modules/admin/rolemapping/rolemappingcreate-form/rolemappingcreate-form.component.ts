import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/config/api.config';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rolemappingcreate-form',
  templateUrl: './rolemappingcreate-form.component.html',
  styleUrls: ['./rolemappingcreate-form.component.scss']
})
export class RolemappingcreateFormComponent implements OnInit {
  RoleList: any;
  unSubscribe$ = new Subject();
  buttonActive: boolean = false;
  activeRoleId: any;

  constructor(private toast: ToastrService, private apiservice: ApiService,) { }

  ngOnInit(): void {
    this.GetallRoles()
  }

  GetallRoles() {
    this.apiservice.post(URLS.getRolls, {}).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.RoleList = res.map((role: any) => ({
          ...role,
          isEditing: false
        }));
      } else {
        this.toast.error(res.message, 'Error');
      }
    });
  }

  toggleEdit(role: any) {
    debugger
    if (!role.isEditing) {
      this.activeRoleId = role.id;
      this.buttonActive = true;
    } else {
      this.activeRoleId = null;
      this.buttonActive = false;
    }
    role.isEditing = !role.isEditing;
    if (!role.isEditing) {
      const payload = {
        id: role.id,
        role: role.role,
        create: role.create,
        read: role.read,
        update: role.update,
        delete: role.delete,
        basicAccess: role.basicAccess
      };

      this.apiservice.post(URLS.saveRole, payload).pipe(takeUntil(this.unSubscribe$)).subscribe({
        next: (res: any) => {
          if (res.status == true) {
            this.toast.success('Role updated successfully');
            this.GetallRoles();
          } else {
            this.toast.error(res.message || 'Failed to update role');
          }
        },
        error: (err) => {
          this.toast.error('Error updating role');
          console.error(err);
        }
      });
    }
  }



}
