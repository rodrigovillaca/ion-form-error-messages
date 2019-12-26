- [ion-form-error-messages](#ion-form-error-messages)
  - [Install](#install)
  - [Usage](#usage)
  - [Parameters](#parameters)
    - [formGroup](#formgroup)
    - [messages](#messages)
    - [color](#color)
  - [Custom Styling](#custom-styling)
  - [Todo](#todo)



# ion-form-error-messages

An ionic 4 component that will display a list of error messages for a given reactive form formGroup object.

## Install

``` 
npm install ion-form-error-messages --save 
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

**Only errors that have messages defined here will show up**

Format is:

```javascript
{ 
  controlName: { 
    errorKey: validationMessage,
    ...
  }
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
        <ion-text>{{ textWithColorOption }} </ion-text>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-item>
```

We can just add a custom class to ion-form-error-messages to use css styling:
```html
<ion-form-error-messages
    ion-form-error-messagess
    [messages]="errorMessages"
    [formGroup]="loginForm"
    class="test-error"
>
</ion-form-error-messages>
```
Than we can add use this class to style the inner elements. 

Remmember that if we are doing this in a component style it's required to add the ::ng-deep pseudo-class, not required if this is being set on global styles.

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

## Todo

Add template driven forms support.
