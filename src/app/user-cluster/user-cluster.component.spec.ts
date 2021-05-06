import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClusterComponent } from './user-cluster.component';

describe('UserClusterComponent', () => {
  let component: UserClusterComponent;
  let fixture: ComponentFixture<UserClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
