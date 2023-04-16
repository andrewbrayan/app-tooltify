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

Las siguientes opciones están disponibles para la personalización:

| Propiedades | Tipo | Comentario |
| --- | --- | --- |
| Position (Optional) | "top" o "bottom" o "left" o "right" | Especifica la posición de la información sobre herramientas. El valor predeterminado es "superior". |
| width (Optional) | number o "auto" o "xs" o "sm" o "lg" o "xl" | Especifica el ancho de la información sobre herramientas. El valor predeterminado es "automático". |

## License

Esta biblioteca está autorizada bajo la licencia MIT.
