# Prototipo Interactivo - Sistema de Franquicias de Panaderías

## Descripción

Prototipo mobile-responsive del sistema de gestión para franquicias de panaderías. Incluye dos vistas principales:

1. **Vista del Dueño**: Dashboard consolidado con información de todas las franquicias
2. **Vista del Franquiciado**: Dashboard personalizado para gestionar una franquicia individual

## Características

- ✅ **100% Mobile Responsive**: Diseñado mobile-first, funciona perfectamente en celulares, tablets y desktop
- ✅ **Datos Mock Interactivos**: Datos de ejemplo realistas que se pueden visualizar y navegar
- ✅ **Interfaz Moderna**: Diseño limpio y atractivo usando Tailwind CSS
- ✅ **Gráficos Interactivos**: Visualizaciones de datos con Chart.js
- ✅ **Navegación Intuitiva**: Menú inferior fijo para fácil acceso en móviles
- ✅ **Sin Build Requerido**: Solo HTML, CSS y JavaScript puro - abre directamente en el navegador

## Cómo Usar

1. Abre `index.html` en tu navegador web
2. Selecciona el perfil que deseas ver:
   - **Dueño de la Franquicia**: Vista consolidada de todas las franquicias
   - **Franquiciado**: Vista individual de una franquicia

## Estructura de Archivos

```
prototipo/
├── index.html          # Página de selección de perfil
├── dueño.html          # Vista del dueño de la franquicia
├── franquiciado.html   # Vista del franquiciado
├── data.js             # Datos mock para el prototipo
└── README.md           # Este archivo
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS** (vía CDN): Estilos modernos y responsive
- **Chart.js** (vía CDN): Gráficos y visualizaciones
- **JavaScript Vanilla**: Lógica e interactividad

## Vistas Disponibles

### Vista Dueño

- **Dashboard**: KPIs principales, gráficos de ventas, franquicias destacadas
- **Franquicias**: Lista completa de todas las franquicias con métricas
- **Ventas**: Resumen y análisis de ventas consolidadas
- **Promociones**: Promociones activas y su efectividad

### Vista Franquiciado

- **Dashboard**: KPIs de la franquicia, gráficos de ventas por horario, productos más vendidos
- **Pedidos**: Gestión de pedidos al dueño (crear, ver, filtrar)
- **Stock**: Control de inventario con alertas de stock bajo
- **Ventas**: Análisis detallado de ventas con comparativas

## Notas

- Este es un **prototipo funcional** con datos mock
- Los datos se cargan desde `data.js`
- La navegación entre secciones está completamente funcional
- Los gráficos son interactivos y responsive
- El diseño se adapta automáticamente a diferentes tamaños de pantalla

## Mejoras Futuras

- Integración con backend real
- Autenticación de usuarios
- Persistencia de datos
- Notificaciones en tiempo real
- Exportación de reportes
- Aplicación móvil nativa (opcional)

