# ngx-tootify

[![npm version](https://badge.fury.io/js/ngx-tootify.svg)](https://badge.fury.io/js/ngx-tootify)

## Instalación

Para instalar ngx-tootify, utiliza el siguiente comando:

```yml
npm i ngx-tootify
```

## Uso

Utiliza el siguiente código de ejemplo para mostrar el tooltip en tu aplicación:

```html
<ngx-tooltify position="bottom" width="auto">
  Texto del tooltip
</ngx-tooltify>
```

Importa NgxTooltifyModule en el módulo donde desees utilizar la librería:

```javascript
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

position: (Optional) Type: "top" | "bottom" | "left" | "right". Specifies the position of the tooltip. Default value is "top".
width: (Optional) Type: number | "auto" | "xs" | "sm" | "lg" | "xl". Specifies the width of the tooltip. Default value is "auto".

## License

This library is licensed under the MIT license.
