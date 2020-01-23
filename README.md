# @tcon-22/select-country - Angular Material component that allow users to select a country or nationality with a default and an autocomplete feature - Angular V8 supported incl. schematics

[![npm version](https://badge.fury.io/js/%40tcon-22%2Fselect-country.svg)](https://badge.fury.io/js/%40tcon-22%2Fselect-country)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://tcon-22.github.io/select-country)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://tcon-22.github.io/select-country/doc/index.html)


If you like this project, support [tcon-22](https://github.com/tcon-22) 
:star: it  :loudspeaker: it


<a name="components"/>

## Library's components
- `<mat-select-country>` used to display the main component


---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `8.x`

---

<a name="installation"/>

##  [Installation]

## 1. Install via *ng add*. (Recommended)

If Angular Material Design is not setup, just run `ng add @angular/material` [learn more](https://material.angular.io/guide/getting-started)

Now add the library via the `angular schematics`
```shell
ng add @tcon-22/select-country
```

## 2. Install via *npm*. (Alternative) 

Install peer dependencies 
```shell
npm i svg-country-flags -s
```

then update your `angular.json` like below (svg-country-flags)

```json
"assets": [
              "src/favicon.ico",
              "src/assets",
              {
                "glob": "**/*",
                "input": "./node_modules/svg-country-flags/svg",
                "output": "src/assets/svg-country-flags/svg"
              }
            ],
```

Now install `@tcon-22/select-country` via:
```shell
npm install --save @tcon-22/select-country
```


### Import the library

If you installed the library via angular schematics, you can skip this step

Once installed you need to import the main module:
```js
import { MatSelectCountryModule } from '@tcon-22/select-country';
```

```typescript
import { MatSelectCountryModule } from '@tcon-22/select-country';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatSelectCountryModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application like for lazy loading import ` MatSelectCountryModule ` into your feature module:


<a name="api"/>

## API

### `<mat-select-country>`  used to display the main component - [see the demo examples](https://tcon-22.github.io/select-country/examples)

| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| appearance      | `Input()`  | `MatFormFieldAppearance`    | - |  Possible appearance styles for `mat-form-field` | 'legacy' | 'standard' | 'fill' | 'outline'
| label      | `Input()`  | `boolean`    | - |  `mat-form-field` label's text
| placeHolder      | `Input()`  | `boolean`    | - |  input placeholder text
| disabled      | `Input()`  | `boolean`    | - |  Whether the component is disabled
| readonly      | `Input()`  | `boolean`    | - |  Whether the component is read only
| defaultValue      | `Input()`  | `string`    | - |  alpha2Code of default selected value
| onCountrySelected  | `Output()` | `EventEmitter<Country>`    | - | emits the selected country as object (see the interface below)


```typescript
interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  numericCode: string;
}
```


<a name="usage"/>

## [Usage](https://tcon-22.github.io/select-country)

add the `<mat-select-country>` element to your template:

```html
<mat-select-country [placeHolder]="'Select Country'"
                    [defaultValue]="'GB'"
                    [readonly]="'false'"
                    [disabled]="'false'"
                    (onCountrySelected)="onCountrySelected($event)">
```


<a name="run-demo-app-locally"/>

###  Run Demo App Locally


Build the library

```bash
$ npm run build:lib
```

Serve the demo app

```bash
$ npm start
```




<a name="license"/>

## License

Code forked from [Anthony Nahas](https://github.com/AnthonyNahas). 
Licensed under the MIT License (MIT)

