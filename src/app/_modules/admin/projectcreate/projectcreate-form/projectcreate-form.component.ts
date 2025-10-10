import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/config/api.config';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-projectcreate-form',
  templateUrl: './projectcreate-form.component.html',
  styleUrls: ['./projectcreate-form.component.scss']
})
export class ProjectcreateFormComponent implements OnInit {
  Reportsform: FormGroup;
  projectForm: FormGroup;
  dataSource: any[] = [];
  unSubscribe$ = new Subject();
  projectList: any;
  selected = 0;
  tabtybe: any;
  checklistData: any;

  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, public dataService: DataService, private location: Location, public router: Router, private apiservice: ApiService, private toast: ToastrService) {
    this.Reportsform = this.fb.group({
      id: [0,],
      workName: ['', Validators.required],
      projectId: ['', Validators.required],
      frontendDeveloperName: ['', Validators.required],
      backentDeveloperName: ['', Validators.required],
      managerName: ['', Validators.required],
      testedBy: ['', Validators.required],
      workLists: this.fb.array([])
    });

    this.projectForm = this.fb.group({
      page: this.fb.group({
        pageNumber: [1],
        pageSize: [100]
      }),
      dateRange: this.fb.group({
        fromDate: [0],
        toDate: [0]
      }),
      projectID: [0],
      projectName: ['']
    });
  }

  ngOnInit() {
    this.tabtybe = this.dataService.tabType;
    this.getparamsData();
    this.getProject();
     this.addTask();
  }

  get workLists(): FormArray {
    return this.Reportsform.get('workLists') as FormArray;
  }

  getparamsData() {
    debugger
    this.activeRoute.paramMap.pipe(takeUntil(this.unSubscribe$)).subscribe(params => {
      const encodedData = params.get('id');
      if (encodedData) {
        try {
          const decoded = JSON.parse(atob(decodeURIComponent(encodedData)));
          this.checklistData = decoded;
        } catch (err) {
          console.error('Decoding failed:', err, encodedData);
        }
      }

      if (this.tabtybe === 'ED') {
        this.patchForm();
      } else if (this.tabtybe === 'RE') {
        this.patchForm();
        this.Reportsform.disable();
      }
    });

  }

patchForm() {
  debugger
  if (!this.checklistData) return;
  this.Reportsform.patchValue({
    workName: this.checklistData.workName,
    projectId: this.checklistData.projectId,
    frontendDeveloperName: this.checklistData.frontendDeveloperName,
    backentDeveloperName: this.checklistData.backentDeveloperName,
    managerName: this.checklistData.managerName,
    testedBy: this.checklistData.testedBy,
  });

  // Patch workLists manually
  this.workLists.clear();
  if (this.checklistData.workLists && Array.isArray(this.checklistData.workLists)) {
    this.checklistData.workLists.forEach((item: any) => {
      this.workLists.push(this.createWorkListItem(item));
    });
  }
}

createWorkListItem(item?: any): FormGroup {
  debugger
  return this.fb.group({
    taskName: [item?.taskName || '', Validators.required],
    verified: [item?.verified || false],
    tested: [item?.tested || false],
  });
}


  addTask() {
    const taskForm = this.fb.group({
      taskName: ['', Validators.required],
      verified: [false],
      tested: [false]
    });
    this.workLists.push(taskForm);
    this.dataSource = [...this.workLists.controls];
  }

  removeTask(index: number) {
    if (this.workLists.length <= 1) {
      this.addTask();
    }
    this.workLists.removeAt(index);
    this.dataSource = [...this.workLists.controls];
  }

  submitForm() {
    debugger
    const form = this.Reportsform.valid;
    if (this.tabtybe === 'ED') {
      this.Updateproject();
    } else {
    this.Createproject();
    }
  }

    Createproject() {
    this.apiservice.post(URLS.createproject, this.Reportsform.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res.status == true) {
        this.toast.success(res.message, 'Project Created Successfully');
        this.router.navigate(['/admin/checklist_create/list'])
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

    Updateproject() {
      this.Reportsform.get('id')?.setValue(1)
    this.apiservice.post(URLS.createproject, this.Reportsform.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res.status == true) {
        this.toast.success(res.message, 'Project Update Successfully');
        this.router.navigate(['/admin/checklist_create/list'])
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

  onProjectChange(projectId: number) {
    debugger
    const selected = this.projectList.find((p: { projectId: number; }) => p.projectId === projectId);
    if (selected) {
      this.Reportsform.patchValue({
        frontendDeveloperName: selected.frontendDevloper,
        backentDeveloperName: selected.backendDeveloper,
        managerName: selected.manager,
      });
    }
  }


  getProject() {
    this.apiservice.post(URLS.projectList, this.projectForm.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.projectList = res.response;
        // this.toast.success(res.message, 'Success');
      } else {
        this.toast.error(res.message, 'Error');
      }
    })
  }

  goBack() {
    this.location.back();
  }
}
