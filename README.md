# G5earch

Este es el cliente web del proyecto del grupo 5 para la materia cuatrimestral "Diseño de Lenguaje de Consultas"

## Style Guides

Para ordenar los nombres de las clases en tailwind usamos clsx. Las clases las dividimos en 5 apartados:

1. Tamaño
2. Posición y display (margin, padding, display, flex-realted)
3. Colores y decoración (border, rings)
4. Animaciones o transiciones
5. Condicionales

```javascript
clsx(
  'h-10',
  'm-0 grow',
  'ring-1 ring-indigo-600 text-stone-600 outline-none rounded-none rounded-l-full',
  'transition-all duration-300 ease-in-out',
  isFocus ? 'pl-3 w-80 opacity-100' : 'w-0 p-0 opacity-0'
)
```

## TO-DOs
