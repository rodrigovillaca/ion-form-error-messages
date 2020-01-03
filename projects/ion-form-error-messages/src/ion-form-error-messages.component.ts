import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'ion-form-error-messages',
    template: `
        <ion-item *ngIf="isAnyControlInvalid()" lines="none">
            <ion-grid class="ion-no-padding">
                <ng-container *ngFor="let controlKey of filteredControls">
                    <ng-container *ngFor="let errorKey of objectToKeys(getErrors(controlKey))">
                        <ng-container *ngIf="messages[controlKey] || {} as errorMessages">
                            <ion-row *ngIf="errorMessages[errorKey]">
                                <ion-col class="ion-no-padding ion-text-wrap">
                                    <ion-text [color]="color" [innerHtml]="errorMessages[errorKey]"> </ion-text>
                                </ion-col>
                            </ion-row>
                        </ng-container>
                    </ng-container>
                </ng-container>
            </ion-grid>
        </ion-item>
    `,
    styles: [' ion-item { --min-height: 16px; font-size: 14px;}']
})
export class IonFormErrorMessagesComponent implements OnInit {
    @Input() formGroup: FormGroup;
    @Input() messages: { [control: string]: { [error: string]: string } };
    @Input() color = 'danger';
    @Input() control: string;
    @Input() controls: string[];

    get filteredControls() {
        if (!this.formGroup) {
            return [];
        }
        let controls = this.objectToKeys(this.formGroup.controls);
        if (controls && (this.controls || this.control)) {
            let filterToUse: string[] = [];
            if (this.control) {
                filterToUse.push(this.control);
            }
            if (Array.isArray(this.controls)) {
                filterToUse = filterToUse.concat(this.controls);
            }

            if (filterToUse.length) {
                controls = controls.filter(control => filterToUse.indexOf(control) >= 0);
            }
        }
        return controls;
    }
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

    objectToKeys(value: any): string[] {
        if (!value) {
            return value;
        }
        return Object.keys(value);
    }
}
