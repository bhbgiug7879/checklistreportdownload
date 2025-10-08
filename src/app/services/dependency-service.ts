import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class DependencyService {
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer, public dialog: MatDialog) {
  }

  getTabType() {
    const sdsd = this.activatedRoute.params.subscribe(params => {
      return params['id']
    });
  }

  getFormControl(formGroup: FormGroup, path: string): FormControl<any> {
    return formGroup.get(path) as FormControl<any>;
  }

getuserFormControl(formGroup: FormGroup, path: string): FormControl<any> | null {
  const control = formGroup.get(path);
  if (!control) {
    console.error(`FormControl for path "${path}" not found!`);
    return null;
  }
  return control instanceof FormControl ? control : null;
}

}
