import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IMENU } from 'src/app/interface/sidenav-interface';
import { MENU } from '.';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @ViewChild('sidenav') sideNav!: any;
  user: any;
  showFiller = false;
  isSideBarOpen: boolean = true;
  viewmenu: boolean = true;
  menus: IMENU[] = MENU;

  constructor(private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('userDetails');
  }

  sidebarToggle() {
    this.viewmenu = !this.viewmenu
    this.isSideBarOpen = this.sideNav._opened;
  }

    mouseover() {
    this.viewmenu = true
  }

  mouseleave() {
    if (this.isSideBarOpen) {
      this.viewmenu = true
    }
    else {
      this.viewmenu = false
    }
  }

  logout() {
    if (this.user) {
      this.toast.success(this.user, 'Logout Successfully');
      this.router.navigate(['/auth'])
    }
  }
}
