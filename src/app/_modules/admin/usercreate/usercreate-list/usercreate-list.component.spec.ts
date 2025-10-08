import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateListComponent } from './usercreate-list.component';

describe('UsercreateListComponent', () => {
  let component: UsercreateListComponent;
  let fixture: ComponentFixture<UsercreateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercreateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
