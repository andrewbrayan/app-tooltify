# ngx-tooltify

[![npm version](https://badge.fury.io/js/ngx-tooltify.svg)](https://badge.fury.io/js/ngx-tooltify)

## Instalación

Para instalar ngx-tooltify, utiliza el siguiente comando:

```yml
npm i ngx-tooltify
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

| Propiedades | Tipo | Comentario |
| --- | --- | --- |
| Position (Optional) | "top" | "bottom" | "left" | "right" | Especifica la posición de la información sobre herramientas. El valor predeterminado es "superior". |
| width (Optional) | number | "auto" | "xs" | "sm" | "lg" | "xl" | Especifica el ancho de la información sobre herramientas. El valor predeterminado es "automático". |

## License

This library is licensed under the MIT license.
