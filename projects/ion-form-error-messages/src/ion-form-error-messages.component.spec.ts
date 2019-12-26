import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonFormErrorMessagesComponent } from './ion-form-error-messages.component';

describe('IonFormErrorMessagesComponent', () => {
  let component: IonFormErrorMessagesComponent;
  let fixture: ComponentFixture<IonFormErrorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonFormErrorMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonFormErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
