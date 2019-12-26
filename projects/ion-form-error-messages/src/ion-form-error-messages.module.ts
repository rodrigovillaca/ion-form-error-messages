import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonFormErrorMessagesComponent } from './ion-form-error-messages.component';

@NgModule({
    declarations: [IonFormErrorMessagesComponent],
    imports: [CommonModule, FormsModule, IonicModule],
    exports: [IonFormErrorMessagesComponent]
})
export class IonFormErrorMessagesModule {}
