import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOpportunitiesComponent } from './client-opportunities.component';

describe('ClientOpportunitiesComponent', () => {
  let component: ClientOpportunitiesComponent;
  let fixture: ComponentFixture<ClientOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
