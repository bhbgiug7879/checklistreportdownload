import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showLoader: Subject<boolean> = this.loaderService.showLoader;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.showLoader
  }
}
