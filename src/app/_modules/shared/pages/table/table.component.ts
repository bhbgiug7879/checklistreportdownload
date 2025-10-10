import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITABLE_CONFIG } from 'src/app/interface/table-interface';
import { AlertmodalComponent, ConfirmDialogModel } from '../alertmodal/alertmodal.component';
import { MatDialog } from '@angular/material/dialog';
import { DependencyService } from 'src/app/services/dependency-service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() tableData: any = [];
@Input() tableModel: any = {};
@Input() tableConfig: ITABLE_CONFIG = {};
@Output() editEvent = new EventEmitter<any>();
@Output() deleteEvent = new EventEmitter<any>();
@Output() viewEvent = new EventEmitter<any>();
@Output() pdfDownloadEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog, public ds: DependencyService) { }

  ngOnInit(): void {
    // debugger
    // console.log('checklisttabledata', this.tableData, 'checklisttablemodal', this.tableModel, this.tableConfig);
  }


    encodeData(data: any): string {
      debugger
    try {
      return encodeURIComponent(btoa(JSON.stringify(data)));
    } catch (e) {
      console.error('Encoding failed', e);
      return '';
    }
  }

    confirmDialog(data: any): void {
    const message = `Are you sure you want to delete this?`;

    const dialogData = new ConfirmDialogModel("Delete Action", message);

    const dialogRef = this.dialog.open(AlertmodalComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.deleteEvent.emit(data);
      }

    });
  }

}
