import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alertmodal',
  templateUrl: './alertmodal.component.html',
  styleUrls: ['./alertmodal.component.scss']
})
export class AlertmodalComponent implements OnInit {
  title: string = '';
  message: string = '';
  type?: string;
  pwdData?: { id?: string, pwd: string };
  isClick: boolean = false;

  constructor(public dialogRef: MatDialogRef<AlertmodalComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    this.title = data.title;
    this.message = data.message;
    this.type = data.type;
    this.pwdData = data.data;
  }

  ngOnInit(): void {
  }

    onConfirm(): void {
    this.dialogRef.close(this.type != 'AL');
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  copyText(): string {
    return `User Name: ${this.pwdData?.id}\n\nPassword: ${this.pwdData?.pwd}`
  }

}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string, public type?: string, public data?: { id?: string, pwd: string }) {
  }
}