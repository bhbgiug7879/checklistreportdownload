import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() pageSize: FormControl = new FormControl(10);
  @Input() length: FormControl = new FormControl(0);
  @Input() pageIndex: FormControl = new FormControl(1);
  @Output() changeEvent = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  pageEvent(event: { pageSize: number; pageIndex: number; }) {
    this.pageSize.setValue(event.pageSize);
    this.pageIndex.setValue(event.pageIndex + 1);
    this.changeEvent.emit();
  }

}
