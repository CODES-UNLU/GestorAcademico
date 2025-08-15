# Sistema de Equivalencias Académicas - Plan 17.14

## Descripción

Esta aplicación web permite gestionar y consultar las equivalencias entre el Plan 17.14 y los planes anteriores de la carrera de Informática/Sistemas. La aplicación está desarrollada completamente en HTML, CSS y JavaScript, sin necesidad de servidor o base de datos externa.

## Características

✅ **Dashboard completo** - Estadísticas y resumen de equivalencias  
✅ **Gestión de equivalencias** - Agregar, editar y eliminar  
✅ **Plan de Estudios completo** - Información detallada de todas las materias  
✅ **Búsqueda avanzada** - Múltiples criterios de búsqueda  
✅ **Filtros por categoría** - Organización por tipo de asignatura  
✅ **Exportación de datos** - Descarga en formato CSV  
✅ **Almacenamiento local** - Los datos se guardan en el navegador  
✅ **Interfaz responsive** - Funciona en todos los dispositivos  
✅ **Datos pre-cargados** - Incluye todas las equivalencias del plan oficial  

## Categorías de Asignaturas

- **Programación**: Algoritmos, estructuras de datos, POO, web
- **Matemáticas**: Álgebra, análisis matemático, matemática computacional
- **Sistemas**: Sistemas de información, arquitectura, distribuidos
- **Bases de Datos**: Relacionales, distribuidas, masivos, textuales
- **Redes**: Telecomunicaciones, fundamentos de redes
- **Inteligencia Artificial**: IA, sistemas inteligentes, recuperación
- **Otras**: Inglés, emprendimientos, seguridad, gestión

## Cómo usar

### 1. Instalación
- Descarga todos los archivos en una carpeta
- Abre `index.html` en tu navegador web
- ¡Listo! No se requiere instalación adicional

### 2. Navegación
- **Dashboard**: Vista general con estadísticas
- **Ver Equivalencias**: Tabla completa con filtros
- **Plan de Estudios**: Información detallada de todas las materias
- **Buscar**: Búsqueda avanzada por múltiples criterios
- **Agregar**: Formulario para nuevas equivalencias

### 3. Funcionalidades principales

#### Consultar Equivalencias
- Usa los filtros por categoría
- Busca por código o nombre de asignatura
- Navega por la tabla completa

#### Plan de Estudios
- Consulta información detallada de todas las materias
- **Organizado por cuatrimestres** (12 cuatrimestres total)
- Filtra por tipo: Obligatorias, Optativas o Prácticas
- Busca en el contenido de las materias
- Organizado por áreas temáticas

#### Búsqueda Avanzada
- Busca por código del plan 17.14
- Busca por código del plan anterior
- Busca por nombre de asignatura
- Filtra por categoría

#### Agregar Nueva Equivalencia
- Completa el formulario con los datos
- Selecciona la categoría apropiada
- Agrega observaciones si es necesario

#### Editar Equivalencias
- Haz clic en el botón de editar (lápiz)
- Modifica los datos en el modal
- Guarda los cambios

#### Exportar Datos
- Desde el dashboard, haz clic en "Excel"
- Se descargará un archivo CSV con todos los datos

## Estructura de Archivos

```
├── index.html          # Archivo principal de la aplicación
├── styles.css          # Estilos y diseño responsive
├── script.js           # Lógica y funcionalidad
└── README.md           # Este archivo de instrucciones
```

## Datos Pre-cargados

La aplicación incluye automáticamente todas las equivalencias del Plan 17.14 oficial:

- **40 equivalencias** entre Plan 17.14 y planes anteriores
- **Códigos únicos** para cada asignatura según el plan oficial
- **Categorización automática** por tipo de contenido
- **Mapeo completo** de asignaturas equivalentes

## Organización por Cuatrimestres

El Plan de Estudios está organizado cronológicamente en **12 cuatrimestres**:

### **Primer Cuatrimestre**
- Competencias Básicas en Informática (19054)
- Competencias Básicas en Idioma Inglés (39553)
- Taller Introductorio de Interpretación de Problemas (14026)

### **Segundo Cuatrimestre**
- Introducción a la Programación (11271)
- Matemática Básica (13014)
- Introducción a los Sistemas de Información (21256)

### **Tercer Cuatrimestre**
- Programación Estructurada (11274)
- Sistemas de Información I (11256)
- Álgebra Lineal y Geometría (13021)

### **Cuarto Cuatrimestre**
- Estructuras de Datos y Algoritmos I (11275)
- Sistemas de Información II (11258)
- Análisis Matemático I (13022)

### **Quinto Cuatrimestre**
- Arquitectura de Computadoras (41426)
- Programación Orientada a Objetos (11276)
- Análisis Matemático II (13923)

### **Sexto Cuatrimestre**
- Sistemas de Información III (11259)
- Programación en Ambiente Web (11286)
- Bases de Datos Relacionales (11277)

### **Séptimo Cuatrimestre**
- Gestión de Soluciones Innovadoras (21279)
- Seminario de Integración Profesional (11287)
- Estructuras de Datos y Algoritmos II (14030)

### **Octavo Cuatrimestre**
- Fundamentos de Redes de Datos (14027)
- Matemática Computacional (14028)
- Sistemas Distribuidos y Programación Paralela (41429)

### **Noveno Cuatrimestre**
- Bases de Datos Distribuidas (11278)
- Sistemas de Información IV (11260)
- Aspectos Profesionales y Sociales (21257)

### **Décimo Cuatrimestre**
- Gestión de Datos Masivos (11288)
- Seguridad Informática (11292)
- Gestión de Proyectos (21258)

### **Undécimo Cuatrimestre**
- Teoría de la Computación (11419)
- Modelos de Decisión y Optimización (14034)
- Inteligencia Artificial (11289)

### **Duodécimo Cuatrimestre**
- Taller de Tesina (11091)

## Almacenamiento

- Los datos se guardan automáticamente en el navegador (localStorage)
- No se pierden al cerrar y abrir la aplicación
- Se pueden exportar para respaldo externo

## Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Dispositivos móviles y tablets
- ✅ No requiere conexión a internet
- ✅ Funciona offline

## Personalización

### Agregar Nuevas Categorías
Edita el archivo `script.js` y agrega nuevas categorías en:
- Array `categorias` en la función `populateCategoryFilters()`
- Objeto `labels` en la función `getCategoriaLabel()`
- Estilos CSS para `.categoria-badge.nueva-categoria`

### Modificar Estilos
Edita `styles.css` para cambiar:
- Colores y temas
- Tipografías
- Layout y espaciado
- Responsive design

## Notas Importantes

> **Nota**: Las asignaturas pueden revalidarse con otras actividades académicas de planes de estudios anteriores no contempladas en el plan nuevo 17.14, sujeto a evaluación de la Coordinación de la Carrera.

## Soporte

Para reportar problemas o solicitar mejoras:
1. Revisa que todos los archivos estén en la misma carpeta
2. Verifica que tu navegador esté actualizado
3. Asegúrate de que JavaScript esté habilitado

## Licencia

Esta aplicación es de uso libre para fines educativos y académicos.

---

**Desarrollado para la gestión de equivalencias académicas de la carrera de Informática/Sistemas**
