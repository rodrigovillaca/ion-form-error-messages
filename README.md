# ion-form-error-messages

An ionic 4 component that will display a list of error messages for a given reactive form formGroup object.

- [ion-form-error-messages](#ion-form-error-messages)
  - [Install](#install)
  - [Usage](#usage)
  - [Parameters](#parameters)
    - [formGroup](#formgroup)
    - [messages](#messages)
    - [color](#color)
  - [Custom Styling](#custom-styling)
  - [Contributing](#contributing)
  - [Todo](#todo)




It's possible to filter what controls/errors to show by specifying a limited list for the messages option, see the [messages](#messages) parameter bellow.


## Install

Run:
``` 
npm install ion-form-error-messages --save 
```


Import IonFormErrorMessagesModule on your module or app.module.ts:

```typescript
import ...
...
import { IonFormErrorMessagesModule } from 'ion-form-error-messages';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        ReactiveFormsModule,
        IonicModule,
        ... ,
        IonFormErrorMessagesModule
    ],
    ...
})
export class AppModule {}
```


## Usage

```html
<ion-form-error-messages 
  [messages]="messages" 
  [formGroup]="existingFormGroup" 
  [color]="color">
</ion-form-error-messages>
```

## Parameters

### formGroup

A reactive form FormGroup object to iterate over the controls.

### messages 
A json object for the message list. 

**Only errors that have defined messages will show up**

Format is:

```javascript
{ 
  controlName: { 
    errorKey: validationMessage,
    ...
  },
  ... 
}
```

Example:
```javascript
{
  username: {
    required: 'Username is required',
    minlength: 'Username must be at least 6 characters long'
  },
  password: {
    required: 'Password is required',
    customValidatorPasswordError: 'Password must match requirements'
  }
}
```

### color

Ionic color to use for the text. Default is 'danger'. More information at:
https://ionicframework.com/docs/theming/colors


## Custom Styling

Inside the ion-form-error-messages tag the following dom structure is generated:
```html
<ion-item>
    <ion-grid>
        <ion-row>
            <ion-col>
                <ion-text>{{ messageWithColorOption }} </ion-text>
            </ion-col>
        </ion-row>
    </ion-grid>
</ion-item>
```

By default ion-grid and ion-col have no padding, so the text items are aligned with other ion-item elements on the same form.

We can just add a custom class to ion-form-error-messages to use css styling:
```html
<ion-form-error-messages
    ion-form-error-messagess
    [messages]="errorMessagesProperty"
    [formGroup]="formGroupProperty"
    class="test-error"
>
</ion-form-error-messages>
```

And use the class to style the inner elements. 

Remmember: If you are styling the messages inside a component stylesheet, you are required to add the ::ng-deep pseudo-class, not required if this is being set on global stylesheets.

Example:
```css
  ::ng-deep .test-error {
    ion-item {
        padding-left: 55px;
        border: 1px solid yellow;
        ion-grid {
            border: 1px solid black;
            ion-row {
                border: 1px solid blue;
                ion-col {
                    border: 1px solid green;
                    ion-text {
                        border: 1px solid yellow;
                    }
                }
            }
        }
    }
}
```

## Contributing

If you are contributing with the project you should build the library with: 
```
npm run build
```
This will copy the README file so it is update on NPM. Any further scripts required on future versions will be called by this command.


## Todo

Add template driven forms support.
