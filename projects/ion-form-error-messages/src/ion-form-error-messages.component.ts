import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
    selector: 'ion-form-error-messages',
    template: `
        <ion-item *ngIf="isAnyControlInvalid()">
            <ion-grid class="ion-no-padding">
                <ng-container *ngFor="let controlKey of objectToKeys(formGroup?.controls)">
                    <ng-container *ngFor="let errorKey of objectToKeys(getErrors(controlKey))">
                        <ng-container *ngIf="messages[controlKey] || {} as errorMessages">
                            <ion-row *ngIf="errorMessages[errorKey]">
                                <ion-col class="ion-no-padding ion-text-wrap">
                                    <ion-text [color]="color">
                                        {{ errorMessages[errorKey] }}
                                    </ion-text>
                                </ion-col>
                            </ion-row>
                        </ng-container>
                    </ng-container>
                </ng-container>
            </ion-grid>
        </ion-item>
    `,
    styles: []
})
export class IonFormErrorMessagesComponent implements OnInit {
    @Input() formGroup: FormGroup;
    @Input() messages: { [control: string]: { [error: string]: string } };
    @Input() color = 'danger';

    constructor() {}

    ngOnInit() {}

    getErrors(controlKey: string) {
        if (!this.formGroup || !this.formGroup.controls || !this.formGroup.controls[controlKey]) {
            return {};
        }

        return this.formGroup.controls[controlKey].errors;
    }

    isAnyControlInvalid() {
        const controlKeys = Object.keys(this.formGroup.controls);
        let isInvalid = false;
        for (const controlKey of controlKeys) {
            if (this.isControlInvalid(controlKey)) {
                isInvalid = true;
                break;
            }
        }
        return isInvalid;
    }

    isControlInvalid(controlKey: string) {
        const control = this.formGroup.controls[controlKey];
        if (!control || !control.errors) {
            return false;
        } else {
            const errorKeys = Object.keys(control.errors);
            let isInvalid = false;

            for (const errorKey of errorKeys) {
                if (this.messages[controlKey][errorKey]) {
                    isInvalid = true;
                    break;
                }
            }
            return control.invalid && isInvalid && (control.dirty || control.touched);
        }
    }

    objectToKeys(value: any): any {
        if (!value) {
            return value;
        }
        return Object.keys(value);
    }
}
