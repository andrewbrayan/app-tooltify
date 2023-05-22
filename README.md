# ngx-tooltify

Angular library for easily creating customized and attractive tooltips. Add additional information to elements on your website or mobile application quickly and easily, without the need for custom code.

## Installation

To install ngx-tooltify, use the following command:

```yml
npm i ngx-tooltify
```

## Usage

Use the following example code to display the tooltip in your application:

```html
<p>
  Lorem ipsum dolor sit amet

  <ngx-tooltify position="bottom" width="auto">
    Tooltip Text
  </ngx-tooltify>
</p>
```

Import NgxTooltifyModule into the module where you want to use the library:

```javascript
import { NgxTooltifyModule } from 'ngx-tooltify';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxTooltifyModule
  ],
  // ... other imports
})
export class AppModule { }
```

## Options

The following options are available for customization:

| Propiedades | Tipo | Comentario |
| --- | --- | --- |
| Position (Optional) | "top" or "bottom" or "left" or "right" | Specifies the position of the tooltip. The default value is "top". |
| width (Optional) | number or "auto" or "xs" or "sm" or "lg" or "xl" | Specifies the width of the tooltip. The default value is "auto". |

## License

This library is licensed under the MIT license.
