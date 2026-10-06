# Human Coffe

Sitio web de **Human Coffe**, una tienda chilena de que vende implementos y **herramientas** de café de especialidad — molinos, cafeteras (máquinas de espresso) y accesorios como tampers, balanzas y distribuidores.

> Idea de marca: *"Tu café. Tus reglas. Nuestras herramientas."*

---

## Tecnologías

- **React + TypeScript**: la base del sitio.
- **Vite**: herramienta que arma y publica el sitio.
- **React Router**: maneja la navegación entre la portada y las fichas de producto.
- **CSS propio**: el diseño no usa plantillas prefabricadas.

---

## Secciones del sitio (jerarquía)

Todo vive en una portada larga en este orden:

1. **Barra superior + Encabezado** — avisos y navegación (Molinos, Máquinas, Accesorios, Compara, Contacto).
2. **Hero** — presentación principal con video y llamado a comprar.
3. **Beneficios** — envío, garantía, cuotas y asesoría.
4. **Compra por categoría** — Molinos, Máquinas y Accesorios.
5. **Más vendidos** — carrusel de productos destacados.
6. **Colecciones** — entradas visuales para orientar la compra.
7. **Pack destacado** — oferta de un setup de inicio.
8. **Editorial** — guía de "cómo elegir".
9. **Comparador** — comparación lado a lado.
10. **Marca y prueba** — video, cifras y marquesina de marcas.
11. **Valores** — propuesta y confianza.
12. **Atención 1 a 1** — contacto y showroom.
13. **Preguntas frecuentes**.
14. **Newsletter** — captura de correo.
15. **Pie de página**.

Además existe una **página de producto** (`/producto/:id`) con galería, colores, cantidad, especificaciones y productos relacionados.

---

## Estilo

Estética **editorial y natural**, inspirada en café de especialidad:

- **Paleta sobria**: verdes salvia y crema, tinta oscura, texturas de concreto.
- **Tipografías expresivas**: una sans moderna, una monoespaciada y una display de alto impacto.
- **Detalles de marca**: marquesinas, animaciones sutiles al hacer scroll y tarjetas grandes.
- **Diseño responsivo**: se adapta a celular, tablet y escritorio.

---

## Estado actual: qué **no** tiene todavía

Este es hoy un **prototipo de front-end (solo lo visual)**. Aún no es una tienda funcional. Falta:

- **Sin backend ni base de datos**: no hay servidor que guarde información.
- **Sin integración de pagos**: el botón "Ir a pagar" no cobra nada; Webpay y Mercado Pago son solo menciones.
- **Catálogo no funcional**: solo hay **4 productos de ejemplo** cargados a mano; accesorios aparece como "Próximamente".
- **Sin stock ni inventario**: no se controla disponibilidad real.
- **Carro no real**: se guarda solo en el navegador del visitante y se pierde al limpiar datos.
- **Sin cuentas de usuario**: no hay registro, login ni historial de compras.
- **Sin pedidos ni envíos**: no se generan órdenes ni se calcula despacho.
- **Buscador y filtros sin funcionar**: el ícono de búsqueda no opera y los filtros de categoría son básicos.
- **Formularios sin conectar**: el newsletter y el formulario de contacto no envían datos a ningún lado.
- **Datos de contacto de ejemplo**: teléfono, showroom y redes sociales son de muestra.
- **Sin panel de administración**: no se pueden subir productos ni editar precios desde el sitio.
- **Sin páginas legales**: no hay términos, privacidad ni política de devoluciones.

En resumen: la **parte visual y de experiencia está avanzada**, pero la **operación real de e-commerce (ventas, pagos, stock y administración) todavía no existe**.
