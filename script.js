// Datos iniciales de equivalencias (basados en la imagen proporcionada)
let equivalencias = [
    {
        id: 1,
        codigoNuevo: "19054",
        asignaturaNuevo: "Competencias Basicas en Informatica",
        codigoAnterior: "11074",
        asignaturaAnterior: "Programacion I",
        categoria: "programacion",
        observaciones: ""
    },
    {
        id: 2,
        codigoNuevo: "39553",
        asignaturaNuevo: "Competencias Basicas en Idioma Ingles (equiv a niveles I y II)",
        codigoAnterior: "31972",
        asignaturaAnterior: "Ingles II",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 3,
        codigoNuevo: "14026",
        asignaturaNuevo: "Taller Introductorio de Interpretacion de Problemas",
        codigoAnterior: "11072",
        asignaturaAnterior: "Algebra y Logica Computacional",
        categoria: "matematicas",
        observaciones: ""
    },
    {
        id: 4,
        codigoNuevo: "11271",
        asignaturaNuevo: "Introduccion a la Programacion",
        codigoAnterior: "11071",
        asignaturaAnterior: "Introduccion a la Programacion",
        categoria: "programacion",
        observaciones: ""
    },
    {
        id: 5,
        codigoNuevo: "13014",
        asignaturaNuevo: "Matematica Basica",
        codigoAnterior: "11072",
        asignaturaAnterior: "Algebra y Logica Computacional",
        categoria: "matematicas",
        observaciones: ""
    },
    {
        id: 6,
        codigoNuevo: "21256",
        asignaturaNuevo: "Introduccion a los Sistemas de Informacion",
        codigoAnterior: "21056",
        asignaturaAnterior: "Introduccion a los Sistemas de Informacion",
        categoria: "sistemas",
        observaciones: ""
    },
    {
        id: 7,
        codigoNuevo: "11274",
        asignaturaNuevo: "Programacion Estructurada",
        codigoAnterior: "11074",
        asignaturaAnterior: "Programacion I",
        categoria: "programacion",
        observaciones: ""
    },
    {
        id: 8,
        codigoNuevo: "11256",
        asignaturaNuevo: "Sistemas de Informacion I",
        codigoAnterior: "11056",
        asignaturaAnterior: "Sistemas de Informacion I",
        categoria: "sistemas",
        observaciones: ""
    },
    {
        id: 9,
        codigoNuevo: "13021",
        asignaturaNuevo: "Algebra Lineal y Geometria",
        codigoAnterior: "11073",
        asignaturaAnterior: "Algebra y Logica Computacional + Matematica Discreta",
        categoria: "matematicas",
        observaciones: ""
    },
    {
        id: 10,
        codigoNuevo: "11275",
        asignaturaNuevo: "Estructuras de Datos y Algoritmos I",
        codigoAnterior: "11075",
        asignaturaAnterior: "Programacion II",
        categoria: "programacion",
        observaciones: ""
    },
    {
        id: 11,
        codigoNuevo: "11258",
        asignaturaNuevo: "Sistemas de Informacion II",
        codigoAnterior: "11058",
        asignaturaAnterior: "Sistemas de Informacion II",
        categoria: "sistemas",
        observaciones: ""
    },
    {
        id: 12,
        codigoNuevo: "13022",
        asignaturaNuevo: "Analisis Matematico I",
        codigoAnterior: "11081",
        asignaturaAnterior: "Analisis Matematico I",
        categoria: "matematicas",
        observaciones: ""
    },
    {
        id: 13,
        codigoNuevo: "41426",
        asignaturaNuevo: "Arquitectura de Computadoras",
        codigoAnterior: "41406",
        asignaturaAnterior: "Arquitectura de Computadoras",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 14,
        codigoNuevo: "11276",
        asignaturaNuevo: "Programacion Orientada a Objetos",
        codigoAnterior: "11076",
        asignaturaAnterior: "Programacion Orientada a Objetos",
        categoria: "programacion",
        observaciones: ""
    },
    {
        id: 15,
        codigoNuevo: "13923",
        asignaturaNuevo: "Analisis Matematico II",
        codigoAnterior: "11082",
        asignaturaAnterior: "Analisis Matematico II",
        categoria: "matematicas",
        observaciones: ""
    },
    {
        id: 16,
        codigoNuevo: "11259",
        asignaturaNuevo: "Sistemas de Informacion III",
        codigoAnterior: "11059",
        asignaturaAnterior: "Sistemas de Informacion III",
        categoria: "sistemas",
        observaciones: ""
    },
    {
        id: 17,
        codigoNuevo: "11286",
        asignaturaNuevo: "Programacion en Ambiente Web",
        codigoAnterior: "11086",
        asignaturaAnterior: "Programacion en Ambiente Web",
        categoria: "programacion",
        observaciones: ""
    },
    {
        id: 18,
        codigoNuevo: "11277",
        asignaturaNuevo: "Bases de Datos Relacionales",
        codigoAnterior: "11077",
        asignaturaAnterior: "Bases de Datos I",
        categoria: "bases-datos",
        observaciones: ""
    },
    {
        id: 19,
        codigoNuevo: "21279",
        asignaturaNuevo: "Gestion de Soluciones Innovadoras",
        codigoAnterior: "21420",
        asignaturaAnterior: "Taller de Emprendimientos Tecnologicos",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 20,
        codigoNuevo: "11287",
        asignaturaNuevo: "Seminario de Integracion Profesional",
        codigoAnterior: "11087",
        asignaturaAnterior: "Seminario de Integracion Profesional",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 21,
        codigoNuevo: "14030",
        asignaturaNuevo: "Estructuras de Datos y Algoritmos II",
        codigoAnterior: "11075",
        asignaturaAnterior: "Programacion II",
        categoria: "programacion",
        observaciones: ""
    },
    {
        id: 22,
        codigoNuevo: "14027",
        asignaturaNuevo: "Fundamentos de Redes de Datos",
        codigoAnterior: "10040",
        asignaturaAnterior: "Teleinformatica y Redes",
        categoria: "redes",
        observaciones: ""
    },
    {
        id: 23,
        codigoNuevo: "14028",
        asignaturaNuevo: "Matematica Computacional",
        codigoAnterior: "11072",
        asignaturaAnterior: "Algebra y Logica Computacional + Matematica Discreta",
        categoria: "matematicas",
        observaciones: ""
    },
    {
        id: 24,
        codigoNuevo: "41429",
        asignaturaNuevo: "Sistemas Distribuidos y Programacion Paralela",
        codigoAnterior: "41409",
        asignaturaAnterior: "Sistemas Distribuidos y Programacion Paralela",
        categoria: "sistemas",
        observaciones: ""
    },
    {
        id: 25,
        codigoNuevo: "11278",
        asignaturaNuevo: "Bases de Datos Distribuidos",
        codigoAnterior: "11078",
        asignaturaAnterior: "Bases de Datos II",
        categoria: "bases-datos",
        observaciones: ""
    },
    {
        id: 26,
        codigoNuevo: "11260",
        asignaturaNuevo: "Sistemas de Informacion IV",
        codigoAnterior: "11060",
        asignaturaAnterior: "Sistemas de Informacion IV",
        categoria: "sistemas",
        observaciones: ""
    },
    {
        id: 27,
        codigoNuevo: "21257",
        asignaturaNuevo: "Aspectos Profesionales y Sociales",
        codigoAnterior: "21057",
        asignaturaAnterior: "Aspectos Profesionales y Sociales",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 28,
        codigoNuevo: "11288",
        asignaturaNuevo: "Gestion de Datos Masivos",
        codigoAnterior: "11088",
        asignaturaAnterior: "Bases de Datos Masivos",
        categoria: "bases-datos",
        observaciones: ""
    },
    {
        id: 29,
        codigoNuevo: "11419",
        asignaturaNuevo: "Teoria de la Computacion",
        codigoAnterior: "11412",
        asignaturaAnterior: "Teoria de la Computacion I + Teoria de la Computacion II",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 30,
        codigoNuevo: "14034",
        asignaturaNuevo: "Modelos de Decision y Optimizacion",
        codigoAnterior: "41408",
        asignaturaAnterior: "Modelos, Simulacion y Teoria de la Decision + Modelos y Simulacion",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 31,
        codigoNuevo: "11292",
        asignaturaNuevo: "Seguridad Informatica",
        codigoAnterior: "11092",
        asignaturaAnterior: "Seguridad de la Informacion",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 32,
        codigoNuevo: "11289",
        asignaturaNuevo: "Inteligencia Artificial",
        codigoAnterior: "11089",
        asignaturaAnterior: "Sistemas Inteligentes + Inteligencia Artificial",
        categoria: "inteligencia-artificial",
        observaciones: ""
    },
    {
        id: 33,
        codigoNuevo: "14033",
        asignaturaNuevo: "Bases de Datos Textuales",
        codigoAnterior: "11090",
        asignaturaAnterior: "Recuperacion de Informacion",
        categoria: "inteligencia-artificial",
        observaciones: ""
    },
    {
        id: 34,
        codigoNuevo: "21258",
        asignaturaNuevo: "Gestion de Proyectos",
        codigoAnterior: "21058",
        asignaturaAnterior: "Gestion de Proyectos",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 35,
        codigoNuevo: "14029",
        asignaturaNuevo: "Administracion de Redes",
        codigoAnterior: "11072",
        asignaturaAnterior: "Teleinformatica y Redes",
        categoria: "redes",
        observaciones: ""
    },

    {
        id: 36,
        codigoNuevo: "14032",
        asignaturaNuevo: "Diseño Avanzado de Software",
        codigoAnterior: "11072",
        asignaturaAnterior: "Diseño de Software",
        categoria: "programacion",
        observaciones: ""
    },
    {
        id: 37,
        codigoNuevo: "11091",
        asignaturaNuevo: "Taller de Tesina",
        codigoAnterior: "11072",
        asignaturaAnterior: "Proyecto Final",
        categoria: "otras",
        observaciones: ""
    },
    {
        id: 38,
        codigoNuevo: "41407",
        asignaturaNuevo: "Organizacion de Computadoras",
        codigoAnterior: "-",
        asignaturaAnterior: "-",
        categoria: "otras",
        observaciones: "Nueva materia del Plan 17.14"
    },
    {
        id: 39,
        codigoNuevo: "11410",
        asignaturaNuevo: "Sistemas Operativos",
        codigoAnterior: "-",
        asignaturaAnterior: "-",
        categoria: "sistemas",
        observaciones: "Nueva materia del Plan 17.14"
    },
    {
        id: 40,
        codigoNuevo: "11083",
        asignaturaNuevo: "Estadistica y Probabilidad",
        codigoAnterior: "-",
        asignaturaAnterior: "-",
        categoria: "matematicas",
        observaciones: "Nueva materia del Plan 17.14"
    }
];

// Variables globales
let currentEditId = null;
let filteredEquivalencias = [...equivalencias];

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateDashboard();
    renderEquivalenciasTable();
    populateCategoryFilters();
    initializeSimulador(); // Inicializar el simulador
    // Botón sugerir materias
    const btnSugerir = document.getElementById('btnSugerirMaterias');
    if (btnSugerir) {
        btnSugerir.addEventListener('click', sugerirMateriasDisponibles);
    }
    // Botón exportar PDF
    const btnExportarPDF = document.getElementById('btnExportarPDF');
    if (btnExportarPDF) {
        btnExportarPDF.addEventListener('click', exportarAvancePDF);
    }
});

// Inicializar la aplicación
function initializeApp() {
    // Cargar datos del localStorage si existen
    const savedData = localStorage.getItem('equivalenciasData');
    if (savedData) {
        equivalencias = JSON.parse(savedData);
        filteredEquivalencias = [...equivalencias];
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Navegación por tabs
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Formulario de agregar equivalencia
    document.getElementById('equivalenciaForm').addEventListener('submit', handleAddEquivalencia);

    // Formulario de edición
    document.getElementById('editForm').addEventListener('submit', handleEditEquivalencia);

    // Modal
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('editModal')) {
            closeModal();
        }
    });

    // Filtros y búsqueda
    document.getElementById('categoriaFilter').addEventListener('change', filterEquivalencias);
    document.getElementById('searchInput').addEventListener('input', filterEquivalencias);

    // Filtros y búsqueda del Plan de Estudios
    const planCategoriaFilter = document.getElementById('planCategoriaFilter');
    const planSearchInput = document.getElementById('planSearchInput');
    
    if (planCategoriaFilter) {
        planCategoriaFilter.addEventListener('change', filterPlanEstudios);
    }
    
    if (planSearchInput) {
        planSearchInput.addEventListener('input', filterPlanEstudios);
    }
}

// Cambiar entre tabs
function switchTab(tabName) {
    // Ocultar todos los tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostrar el tab seleccionado
    document.getElementById(tabName).classList.add('active');

    // Actualizar botones de navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Actualizar contenido según el tab
    if (tabName === 'dashboard') {
        updateDashboard();
    } else if (tabName === 'equivalencias') {
        renderEquivalenciasTable();
    }
}

// Actualizar dashboard
function updateDashboard() {
    if (!document.getElementById('totalEquivalencias')) return;
    document.getElementById('totalEquivalencias').textContent = equivalencias.length;
    
    const planNuevo = new Set(equivalencias.map(e => e.codigoNuevo)).size;
    const planesAnteriores = new Set(equivalencias.map(e => e.codigoAnterior)).size;
    
    if (document.getElementById('planNuevo'))
        document.getElementById('planNuevo').textContent = planNuevo;
    if (document.getElementById('planesAnteriores'))
        document.getElementById('planesAnteriores').textContent = planesAnteriores;
}

// Renderizar tabla de equivalencias
function renderEquivalenciasTable() {
    const tbody = document.getElementById('equivalenciasTableBody');
    tbody.innerHTML = '';

    filteredEquivalencias.forEach(equivalencia => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${equivalencia.codigoNuevo}</td>
            <td>${equivalencia.asignaturaNuevo}</td>
            <td>${equivalencia.codigoAnterior}</td>
            <td>${formatearAsignaturaAnterior(equivalencia.asignaturaAnterior, equivalencia.codigoAnterior)}</td>
        `;
        tbody.appendChild(row);
    });
}

// Formatear asignatura anterior para mostrar códigos cuando hay dos materias
function formatearAsignaturaAnterior(asignatura, codigo) {
    // Si la asignatura contiene "+", significa que hay dos materias
    if (asignatura.includes('+')) {
        const partes = asignatura.split('+').map(parte => parte.trim());
        if (partes.length === 2) {
            // La primera materia se mantiene igual, la segunda se le agrega el código
            return `${partes[0]} + ${partes[1]} (${codigo})`;
        }
    }
    return asignatura;
}

// Obtener etiqueta de categoría
function getCategoriaLabel(categoria) {
    const labels = {
        'programacion': 'Programación',
        'matematicas': 'Matemáticas',
        'sistemas': 'Sistemas',
        'bases-datos': 'Bases de Datos',
        'redes': 'Redes',
        'inteligencia-artificial': 'IA',
        'otras': 'Otras'
    };
    return labels[categoria] || categoria;
}

// Poblar filtros de categoría
function populateCategoryFilters() {
    const categorias = ['programacion', 'matematicas', 'sistemas', 'bases-datos', 'redes', 'inteligencia-artificial', 'otras'];
    
    // Filtro principal
    const filterSelect = document.getElementById('categoriaFilter');
    filterSelect.innerHTML = '<option value="">Todas las categorías</option>';
    
    // Filtro de búsqueda
    const searchSelect = document.getElementById('searchCategoria');
    searchSelect.innerHTML = '<option value="">Todas las categorías</option>';
    
    categorias.forEach(cat => {
        const option1 = document.createElement('option');
        option1.value = cat;
        option1.textContent = getCategoriaLabel(cat);
        filterSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = cat;
        option2.textContent = getCategoriaLabel(cat);
        searchSelect.appendChild(option2);
    });
}

// Filtrar equivalencias
function filterEquivalencias() {
    const categoriaFilter = document.getElementById('categoriaFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    filteredEquivalencias = equivalencias.filter(equivalencia => {
        const categoriaMatch = !categoriaFilter || equivalencia.categoria === categoriaFilter;
        const searchMatch = !searchTerm || 
            equivalencia.codigoNuevo.toLowerCase().includes(searchTerm) ||
            equivalencia.asignaturaNuevo.toLowerCase().includes(searchTerm) ||
            equivalencia.codigoAnterior.toLowerCase().includes(searchTerm) ||
            equivalencia.asignaturaAnterior.toLowerCase().includes(searchTerm);

        return categoriaMatch && searchMatch;
    });

    renderEquivalenciasTable();
}

// Realizar búsqueda avanzada
function realizarBusqueda() {
    const codigoNuevo = document.getElementById('searchCodigoNuevo').value.toLowerCase();
    const codigoAnterior = document.getElementById('searchCodigoAnterior').value.toLowerCase();
    const asignaturaNuevo = document.getElementById('searchAsignaturaNuevo').value.toLowerCase();
    const asignaturaAnterior = document.getElementById('searchAsignaturaAnterior').value.toLowerCase();
    const categoria = document.getElementById('searchCategoria').value;

    const resultados = equivalencias.filter(equivalencia => {
        const codigoNuevoMatch = !codigoNuevo || equivalencia.codigoNuevo.toLowerCase().includes(codigoNuevo);
        const codigoAnteriorMatch = !codigoAnterior || equivalencia.codigoAnterior.toLowerCase().includes(codigoAnterior);
        const asignaturaNuevoMatch = !asignaturaNuevo || equivalencia.asignaturaNuevo.toLowerCase().includes(asignaturaNuevo);
        const asignaturaAnteriorMatch = !asignaturaAnterior || equivalencia.asignaturaAnterior.toLowerCase().includes(asignaturaAnterior);
        const categoriaMatch = !categoria || equivalencia.categoria === categoria;

        return codigoNuevoMatch && codigoAnteriorMatch && asignaturaNuevoMatch && asignaturaAnteriorMatch && categoriaMatch;
    });

    mostrarResultadosBusqueda(resultados);
}

// Mostrar resultados de búsqueda
function mostrarResultadosBusqueda(resultados) {
    const container = document.getElementById('searchResults');
    
    if (resultados.length === 0) {
        container.innerHTML = '<p class="no-results">No se encontraron resultados para la búsqueda.</p>';
        return;
    }

    let html = '<h3>Resultados de la búsqueda:</h3>';
    html += '<div class="search-results-grid">';
    
    resultados.forEach(equivalencia => {
        html += `
            <div class="search-result-card">
                <div class="result-header">
                    <span class="categoria-badge ${equivalencia.categoria}">${getCategoriaLabel(equivalencia.categoria)}</span>
                </div>
                <div class="result-content">
                    <div class="result-section">
                        <h4>Plan 17.14</h4>
                        <p><strong>Código:</strong> ${equivalencia.codigoNuevo}</p>
                        <p><strong>Asignatura:</strong> ${equivalencia.asignaturaNuevo}</p>
                    </div>
                    <div class="result-section">
                        <h4>Plan Anterior</h4>
                        <p><strong>Código:</strong> ${equivalencia.codigoAnterior}</p>
                        <p><strong>Asignatura:</strong> ${equivalencia.asignaturaAnterior}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Filtrar Plan de Estudios
function filterPlanEstudios() {
    const categoriaFilter = document.getElementById('planCategoriaFilter').value;
    const searchTerm = document.getElementById('planSearchInput').value.toLowerCase();
    
    const planSections = document.querySelectorAll('.plan-section');
    
    planSections.forEach(section => {
        const categoria = section.getAttribute('data-categoria');
        const materiaCards = section.querySelectorAll('.materia-card');
        
        // Filtrar por categoría
        const categoriaMatch = !categoriaFilter || categoria === categoriaFilter;
        
        if (categoriaMatch) {
            section.style.display = 'block';
            
            // Filtrar materias por término de búsqueda
            materiaCards.forEach(card => {
                const titulo = card.querySelector('h4').textContent.toLowerCase();
                const contenido = card.querySelector('.materia-content').textContent.toLowerCase();
                const searchMatch = !searchTerm || titulo.includes(searchTerm) || contenido.includes(searchTerm);
                
                card.style.display = searchMatch ? 'block' : 'none';
            });
        } else {
            section.style.display = 'none';
        }
    });
}

// Agregar nueva equivalencia
function handleAddEquivalencia(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const nuevaEquivalencia = {
        id: Date.now(),
        codigoNuevo: formData.get('codigoNuevo'),
        asignaturaNuevo: formData.get('asignaturaNuevo'),
        codigoAnterior: formData.get('codigoAnterior'),
        asignaturaAnterior: formData.get('asignaturaAnterior'),
        categoria: formData.get('categoria'),
        observaciones: formData.get('observaciones')
    };

    equivalencias.push(nuevaEquivalencia);
    filteredEquivalencias = [...equivalencias];
    
    saveToLocalStorage();
    updateDashboard();
    renderEquivalenciasTable();
    
    // Limpiar formulario
    event.target.reset();
    
    // Mostrar mensaje de éxito
    mostrarNotificacion('Equivalencia agregada exitosamente', 'success');
}

// Editar equivalencia
function editEquivalencia(id) {
    const equivalencia = equivalencias.find(e => e.id === id);
    if (!equivalencia) return;

    currentEditId = id;
    
    // Llenar formulario de edición
    document.getElementById('editCodigoNuevo').value = equivalencia.codigoNuevo;
    document.getElementById('editAsignaturaNuevo').value = equivalencia.asignaturaNuevo;
    document.getElementById('editCodigoAnterior').value = equivalencia.codigoAnterior;
    document.getElementById('editAsignaturaAnterior').value = equivalencia.asignaturaAnterior;
    document.getElementById('editCategoria').value = equivalencia.categoria;
    document.getElementById('editObservaciones').value = equivalencia.observaciones;
    
    // Mostrar modal
    document.getElementById('editModal').style.display = 'block';
}

// Manejar edición de equivalencia
function handleEditEquivalencia(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const equivalenciaIndex = equivalencias.findIndex(e => e.id === currentEditId);
    
    if (equivalenciaIndex !== -1) {
        equivalencias[equivalenciaIndex] = {
            ...equivalencias[equivalenciaIndex],
            codigoNuevo: formData.get('codigoNuevo'),
            asignaturaNuevo: formData.get('asignaturaNuevo'),
            codigoAnterior: formData.get('codigoAnterior'),
            asignaturaAnterior: formData.get('asignaturaAnterior'),
            categoria: formData.get('categoria'),
            observaciones: formData.get('observaciones')
        };
        
        filteredEquivalencias = [...equivalencias];
        
        saveToLocalStorage();
        updateDashboard();
        renderEquivalenciasTable();
        
        closeModal();
        mostrarNotificacion('Equivalencia actualizada exitosamente', 'success');
    }
}

// Eliminar equivalencia
function deleteEquivalencia(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta equivalencia?')) {
        equivalencias = equivalencias.filter(e => e.id !== id);
        filteredEquivalencias = [...equivalencias];
        
        saveToLocalStorage();
        updateDashboard();
        renderEquivalenciasTable();
        
        mostrarNotificacion('Equivalencia eliminada exitosamente', 'success');
    }
}

// Cerrar modal
function closeModal() {
    document.getElementById('editModal').style.display = 'none';
    currentEditId = null;
}

// Exportar datos
function exportarDatos() {
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Encabezados
    csvContent += "Código Plan 17.14,Asignatura Plan 17.14,Código Plan Anterior,Asignatura Plan Anterior,Categoría,Observaciones\n";
    
    // Datos
    equivalencias.forEach(equivalencia => {
        const row = [
            equivalencia.codigoNuevo,
            `"${equivalencia.asignaturaNuevo}"`,
            equivalencia.codigoAnterior,
            `"${equivalencia.asignaturaAnterior}"`,
            getCategoriaLabel(equivalencia.categoria),
            `"${equivalencia.observaciones}"`
        ].join(',');
        csvContent += row + '\n';
    });
    
    // Crear y descargar archivo
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'equivalencias_plan_17.14.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    mostrarNotificacion('Datos exportados exitosamente', 'success');
}

// Guardar en localStorage
function saveToLocalStorage() {
    localStorage.setItem('equivalenciasData', JSON.stringify(equivalencias));
}

// Mostrar notificación
function mostrarNotificacion(mensaje, tipo) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.innerHTML = `
        <i class="fas fa-${tipo === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${mensaje}</span>
    `;
    
    // Agregar al DOM
    document.body.appendChild(notificacion);
    
    // Mostrar
    setTimeout(() => {
        notificacion.classList.add('show');
    }, 100);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Agregar estilos CSS para notificaciones
const style = document.createElement('style');
style.textContent = `
    .notificacion {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 10000;
        border-left: 4px solid #28a745;
    }
    
    .notificacion.show {
        transform: translateX(0);
    }
    
    .notificacion.success {
        border-left-color: #28a745;
    }
    
    .notificacion.error {
        border-left-color: #dc3545;
    }
    
    .categoria-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .categoria-badge.programacion {
        background: #e3f2fd;
        color: #1976d2;
    }
    
    .categoria-badge.matematicas {
        background: #f3e5f5;
        color: #7b1fa2;
    }
    
    .categoria-badge.sistemas {
        background: #e8f5e8;
        color: #388e3c;
    }
    
    .categoria-badge.bases-datos {
        background: #fff3e0;
        color: #f57c00;
    }
    
    .categoria-badge.redes {
        background: #e0f2f1;
        color: #00796b;
    }
    
    .categoria-badge.inteligencia-artificial {
        background: #fce4ec;
        color: #c2185b;
    }
    
    .categoria-badge.otras {
        background: #f5f5f5;
        color: #616161;
    }
    
    .search-results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .search-result-card {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 1rem;
        border: 1px solid #e0e0e0;
    }
    
    .result-header {
        margin-bottom: 1rem;
    }
    
    .result-section {
        margin-bottom: 1rem;
    }
    
    .result-section h4 {
        color: #333;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .result-section p {
        margin: 0.25rem 0;
        font-size: 0.9rem;
    }
    
    .no-results {
        text-align: center;
        color: #666;
        font-style: italic;
        padding: 2rem;
    }
`;
document.head.appendChild(style);

// ===== SIMULADOR DE AVANCE DE CARRERA =====

// --- DEFINICIÓN DEL PLAN 17.14 (dejar esto al principio) ---
const planEstudios = {
    cuatrimestres: [
        // Plan 17.14 - Datos resumidos y correlatividades según la web oficial
        { numero: 1, nombre: "Primer Cuatrimestre", materias: [
            { codigo: "11071", nombre: "Introducción a la Programación", correlativas: [] },
            { codigo: "11072", nombre: "Álgebra y Lógica Computacional", correlativas: [] },
            { codigo: "21056", nombre: "Introducción a los Sistemas de Información", correlativas: [] },
            { codigo: "41407", nombre: "Organización de Computadoras", correlativas: [] }
        ]},
        { numero: 2, nombre: "Segundo Cuatrimestre", materias: [
            { codigo: "11073", nombre: "Matemática Discreta", correlativas: ["11072"] },
            { codigo: "11074", nombre: "Programación I", correlativas: ["11071"] },
            { codigo: "41406", nombre: "Arquitectura de Computadoras", correlativas: ["41407"] },
            { codigo: "31971", nombre: "Inglés I", correlativas: [] }
        ]},
        { numero: 3, nombre: "Tercer Cuatrimestre", materias: [
            { codigo: "11081", nombre: "Análisis Matemático I", correlativas: ["11072"] },
            { codigo: "11075", nombre: "Programación II", correlativas: ["11074"] },
            { codigo: "11056", nombre: "Sistemas de Información I", correlativas: ["21056", "11074"] },
            { codigo: "31972", nombre: "Inglés II", correlativas: ["31971"] }
        ]},
        { numero: 4, nombre: "Cuarto Cuatrimestre", materias: [
            { codigo: "11082", nombre: "Análisis Matemático II", correlativas: ["11081"] },
            { codigo: "11410", nombre: "Sistemas Operativos", correlativas: ["41406", "11075"] },
            { codigo: "11076", nombre: "Programación Orientada a Objetos", correlativas: ["11075"] },
            { codigo: "11077", nombre: "Base de Datos I", correlativas: ["11073", "11075", "11056"] }
        ]},
        { numero: 5, nombre: "Quinto Cuatrimestre", materias: [
            { codigo: "11058", nombre: "Sistemas de Información II", correlativas: ["11056", "11076"] },
            { codigo: "10040", nombre: "Teleinformática y Redes", correlativas: ["11410"] },
            { codigo: "11083", nombre: "Estadística y Probabilidad", correlativas: ["11081"] },
            { codigo: "11079", nombre: "Programación Funcional y Lógica", correlativas: ["11073", "11074"] }
        ]},
        { numero: 6, nombre: "Sexto Cuatrimestre", materias: [
            { codigo: "11059", nombre: "Sistemas de Información III", correlativas: ["11077", "11058"] },
            { codigo: "11078", nombre: "Base de Datos II", correlativas: ["11077"] },
            { codigo: "21057", nombre: "Aspectos Profesionales y Sociales", correlativas: ["11056"] },
            { codigo: "11085", nombre: "Administración y Gestión de Redes", correlativas: ["10040", "11083"] }
        ]},
        { numero: 7, nombre: "Séptimo Cuatrimestre", materias: [
            { codigo: "41408", nombre: "Modelos, Simulación y Teoría de la Decisión", correlativas: ["11083"] },
            { codigo: "41409", nombre: "Sistemas Distribuidos y Programación Paralela", correlativas: ["11085"] },
            { codigo: "11086", nombre: "Programación en Ambiente Web", correlativas: ["11058", "11085"] },
            { codigo: "11087", nombre: "Seminario de Integración Profesional", correlativas: ["31972", "10040", "11059", "11078"] }
        ]}
        // El plan 17.13 de grado (Licenciatura) continúa con materias de la licenciatura, pero para el simulador base de Analista Programador Universitario, estos son los 7 cuatrimestres principales.
    ]
};

// --- VARIABLES GLOBALES ---
let planSeleccionado = '17.14';
let planEstudiosActual = planEstudios;
let estadoMateriasPorPlan = {
    '17.14': {},
    '17.13': {}
};

// --- PLANES DE ESTUDIO ---
const planesEstudio = {
    '17.14': planEstudios,
    '17.13': {
        cuatrimestres: [
            // Plan 17.13 - Datos resumidos y correlatividades según la web oficial
            { numero: 1, nombre: "Primer Cuatrimestre", materias: [
                { codigo: "11071", nombre: "Introducción a la Programación", correlativas: [] },
                { codigo: "11072", nombre: "Álgebra y Lógica Computacional", correlativas: [] },
                { codigo: "21056", nombre: "Introducción a los Sistemas de Información", correlativas: [] },
                { codigo: "41407", nombre: "Organización de Computadoras", correlativas: [] }
            ]},
            { numero: 2, nombre: "Segundo Cuatrimestre", materias: [
                { codigo: "11073", nombre: "Matemática Discreta", correlativas: ["11072"] },
                { codigo: "11074", nombre: "Programación I", correlativas: ["11071"] },
                { codigo: "41406", nombre: "Arquitectura de Computadoras", correlativas: ["41407"] },
                { codigo: "31971", nombre: "Inglés I", correlativas: [] }
            ]},
            { numero: 3, nombre: "Tercer Cuatrimestre", materias: [
                { codigo: "11081", nombre: "Análisis Matemático I", correlativas: ["11072"] },
                { codigo: "11075", nombre: "Programación II", correlativas: ["11074"] },
                { codigo: "11056", nombre: "Sistemas de Información I", correlativas: ["21056", "11074"] },
                { codigo: "31972", nombre: "Inglés II", correlativas: ["31971"] }
            ]},
            { numero: 4, nombre: "Cuarto Cuatrimestre", materias: [
                { codigo: "11082", nombre: "Análisis Matemático II", correlativas: ["11081"] },
                { codigo: "11410", nombre: "Sistemas Operativos", correlativas: ["41406", "11075"] },
                { codigo: "11076", nombre: "Programación Orientada a Objetos", correlativas: ["11075"] },
                { codigo: "11077", nombre: "Base de Datos I", correlativas: ["11073", "11075", "11056"] }
            ]},
            { numero: 5, nombre: "Quinto Cuatrimestre", materias: [
                { codigo: "11058", nombre: "Sistemas de Información II", correlativas: ["11056", "11076"] },
                { codigo: "10040", nombre: "Teleinformática y Redes", correlativas: ["11410"] },
                { codigo: "11083", nombre: "Estadística y Probabilidad", correlativas: ["11081"] },
                { codigo: "11079", nombre: "Programación Funcional y Lógica", correlativas: ["11073", "11074"] }
            ]},
            { numero: 6, nombre: "Sexto Cuatrimestre", materias: [
                { codigo: "11059", nombre: "Sistemas de Información III", correlativas: ["11077", "11058"] },
                { codigo: "11078", nombre: "Base de Datos II", correlativas: ["11077"] },
                { codigo: "21057", nombre: "Aspectos Profesionales y Sociales", correlativas: ["11056"] },
                { codigo: "11085", nombre: "Administración y Gestión de Redes", correlativas: ["10040", "11083"] }
            ]},
            { numero: 7, nombre: "Séptimo Cuatrimestre", materias: [
                { codigo: "41408", nombre: "Modelos, Simulación y Teoría de la Decisión", correlativas: ["11083"] },
                { codigo: "41409", nombre: "Sistemas Distribuidos y Programación Paralela", correlativas: ["11085"] },
                { codigo: "11086", nombre: "Programación en Ambiente Web", correlativas: ["11058", "11085"] },
                { codigo: "11087", nombre: "Seminario de Integración Profesional", correlativas: ["31972", "10040", "11059", "11078"] }
            ]},
            // VIII
            { numero: 8, nombre: "Octavo Cuatrimestre", materias: [
                { codigo: "11412", nombre: "Teoría de la Computación I", correlativas: ["11075"] },
                { codigo: "11088", nombre: "Base de Datos Masivas (Gestión y Análisis)", correlativas: ["11059", "11078", "41408"] },
                { codigo: "OPT1", nombre: "Optativa I", correlativas: ["_todas_analista_final"] },
                { codigo: "11060", nombre: "Sistemas de Información IV", correlativas: ["11059", "11078"] }
            ]},
            // IX
            { numero: 9, nombre: "Noveno Cuatrimestre", materias: [
                { codigo: "11089", nombre: "Sistemas Inteligentes", correlativas: ["11412", "11079"] },
                { codigo: "OPT2", nombre: "Optativa II", correlativas: ["_todas_analista_final"] },
                { codigo: "11092", nombre: "Seguridad de la Información", correlativas: ["11085", "21057"] },
                { codigo: "11090", nombre: "Recuperación de Información", correlativas: ["11078", "11086"] },
                { codigo: "11091", nombre: "Taller de Tesina", correlativas: ["11412", "11088", "11060"] }
            ]},
            // X
            { numero: 10, nombre: "Décimo Cuatrimestre", materias: [
                { codigo: "11417", nombre: "Teoría de la Computación II", correlativas: ["11412"] },
                { codigo: "21058", nombre: "Gestión de Proyectos", correlativas: ["11060"] },
                { codigo: "OPT3", nombre: "Optativa III", correlativas: ["_todas_analista_final"] },
                { codigo: "41410", nombre: "Calidad de los Sistemas de Información", correlativas: ["11060"] }
            ]},
            // Tesina de Grado
            { numero: 11, nombre: "Tesina de Grado", materias: [
                { codigo: "11095", nombre: "Tesina de Grado", correlativas: ["_todas_licenciatura"] }
            ]}
        ]
    }
};

// Inicializar el simulador
function initializeSimulador() {
    // Leer el plan seleccionado del selector (si existe)
    const selector = document.getElementById('planSelector');
    if (selector) {
        planSeleccionado = selector.value;
    }
    // Siempre actualizar la referencia al plan actual
    planEstudiosActual = planesEstudio[planSeleccionado];
    // Asegurar que el estado de materias para el plan esté inicializado
    const saved = localStorage.getItem('estadoMateriasPorPlan');
    if (saved) {
        estadoMateriasPorPlan = JSON.parse(saved);
    }
    if (!estadoMateriasPorPlan[planSeleccionado]) {
        estadoMateriasPorPlan[planSeleccionado] = {};
    }
    // Renderizar correctamente
    renderTimelineCuatrimestres();
    updateProgresoChart();
    updateEstadisticas();
}

// Cargar estado de materias desde localStorage, por plan
function loadEstadoMaterias() {
    const saved = localStorage.getItem('estadoMateriasPorPlan');
    if (saved) {
        estadoMateriasPorPlan = JSON.parse(saved);
    }
    if (!estadoMateriasPorPlan[planSeleccionado]) {
        estadoMateriasPorPlan[planSeleccionado] = {};
    }
}

// Guardar estado de materias en localStorage, por plan
function saveEstadoMaterias() {
    localStorage.setItem('estadoMateriasPorPlan', JSON.stringify(estadoMateriasPorPlan));
}

// Renderizar timeline de cuatrimestres (adaptado para el plan actual)
function renderTimelineCuatrimestres() {
    const container = document.getElementById('timelineCuatrimestres');
    if (!container) return;
    container.innerHTML = '';
    if (!planEstudiosActual || !planEstudiosActual.cuatrimestres) {
        container.innerHTML = '<div style="color:red;">No hay datos de materias para este plan.</div>';
        console.error('planEstudiosActual no definido o sin cuatrimestres:', planEstudiosActual);
        return;
    }
    if (planEstudiosActual.cuatrimestres.length === 0) {
        container.innerHTML = '<div style="color:red;">Este plan no tiene materias cargadas.</div>';
        return;
    }
    planEstudiosActual.cuatrimestres.forEach(cuatrimestre => {
        const cuatrimestreDiv = document.createElement('div');
        cuatrimestreDiv.className = 'cuatrimestre-timeline';
        cuatrimestreDiv.innerHTML = `
            <div class="cuatrimestre-header">
                <div class="cuatrimestre-title">${cuatrimestre.nombre}</div>
            </div>
            <div class="materias-grid">
                ${cuatrimestre.materias.map(materia => renderMateriaTimeline(materia)).join('')}
            </div>
        `;
        container.appendChild(cuatrimestreDiv);
    });
}

// Renderizar materia individual en el timeline (adaptado)
function renderMateriaTimeline(materia) {
    const estado = estadoMateriasPorPlan[planSeleccionado][materia.codigo] || 'pendiente';
    const puedeCursar = puedeCursarMateria(materia);
    let materiaClass = 'materia-timeline';
    if (estado === 'pendiente' && puedeCursar) {
        materiaClass += ' disponible';
    } else if (estado === 'pendiente' && !puedeCursar) {
        materiaClass += ' bloqueada';
    }
    return `
        <div class="${materiaClass}">
            <div class="materia-nombre">${materia.nombre}</div>
            <div class="materia-info">
                <div class="materia-codigo">${materia.codigo}</div>
                <div class="estado-selector">
                    <button type="button" class="estado-btn estado-pendiente${estado === 'pendiente' ? ' active' : ''}"
                        onclick="cambiarEstadoMateria('${materia.codigo}', 'pendiente')" title="Pendiente">
                        <span class="estado-letra">X</span>
                    </button>
                    <button type="button" class="estado-btn estado-cursando${estado === 'cursando' ? ' active' : ''}"
                        onclick="cambiarEstadoMateria('${materia.codigo}', 'cursando')" title="Cursando">
                        <span class="estado-letra">C</span>
                    </button>
                    <button type="button" class="estado-btn estado-regular${estado === 'regular' ? ' active' : ''}"
                        onclick="cambiarEstadoMateria('${materia.codigo}', 'regular')" title="Regular (Aprobada, pendiente final)">
                        <span class="estado-letra">R</span>
                    </button>
                    <button type="button" class="estado-btn estado-final-aprobado${estado === 'final-aprobado' ? ' active' : ''}"
                        onclick="cambiarEstadoMateria('${materia.codigo}', 'final-aprobado')" title="Final Aprobado">
                        <span class="estado-letra">F</span>
                    </button>
                    <button type="button" class="estado-btn estado-promocionada${estado === 'promocionada' ? ' active' : ''}"
                        onclick="cambiarEstadoMateria('${materia.codigo}', 'promocionada')" title="Promocionada">
                        <span class="estado-letra">P</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Verificar si una materia puede ser cursada (adaptado)
function puedeCursarMateria(materia) {
    if (!materia.correlativas || materia.correlativas.length === 0) return true;
    // Caso especial: optativas requieren todas las materias de Analista aprobadas con final
    if (materia.correlativas.includes("_todas_analista_final")) {
        // Cuatrimestres 1 a 7 (Analista)
        const analistaMaterias = [];
        for (let i = 0; i < 7; i++) {
            planesEstudio['17.13'].cuatrimestres[i].materias.forEach(m => analistaMaterias.push(m.codigo));
        }
        return analistaMaterias.every(cod => estadoMateriasPorPlan[planSeleccionado][cod] === 'final-aprobado');
    }
    // Caso especial: tesina de grado requiere todas las materias de licenciatura aprobadas con final
    if (materia.correlativas.includes("_todas_licenciatura")) {
        // Todas las materias de los 10 primeros cuatrimestres (I a X)
        const todasMaterias = [];
        for (let i = 0; i < 10; i++) {
            planesEstudio['17.13'].cuatrimestres[i].materias.forEach(m => todasMaterias.push(m.codigo));
        }
        return todasMaterias.every(cod => estadoMateriasPorPlan[planSeleccionado][cod] === 'final-aprobado');
    }
    // Normal correlatividad
    return materia.correlativas.every(correlativa => {
        const estado = estadoMateriasPorPlan[planSeleccionado][correlativa];
        return estado === 'regular' || estado === 'promocionada' || estado === 'final-aprobado';
    });
}

// Cambiar estado de una materia (adaptado)
function cambiarEstadoMateria(codigo, nuevoEstado) {
    estadoMateriasPorPlan[planSeleccionado][codigo] = nuevoEstado;
    saveEstadoMaterias();
    renderTimelineCuatrimestres();
    updateProgresoChart();
    updateEstadisticas();
}

// Actualizar gráfico de progreso (adaptado)
function updateProgresoChart() {
    const totalMaterias = planEstudiosActual.cuatrimestres.reduce((total, cuat) => total + cuat.materias.length, 0);
    const chartOuter = document.getElementById('chartOuter');
    const chartInner = document.getElementById('chartInner');
    const progressNumber = document.getElementById('progressNumber');
    if (chartOuter && chartInner && progressNumber) {
        const materiasPromocionadas = Object.values(estadoMateriasPorPlan[planSeleccionado]).filter(estado =>
            estado === 'promocionada' || estado === 'final-aprobado'
        ).length;
        const materiasSoloRegular = Object.values(estadoMateriasPorPlan[planSeleccionado]).filter(estado => estado === 'regular').length;
        const porcentajePromocionadas = Math.round((materiasPromocionadas / totalMaterias) * 100);
        const porcentajeRegular = Math.round((materiasSoloRegular / totalMaterias) * 100);
        if (porcentajePromocionadas > 0) {
            chartOuter.style.background = `conic-gradient(#28a745 0deg, #28a745 ${porcentajePromocionadas * 3.6}deg, #e0e0e0 ${porcentajePromocionadas * 3.6}deg, #e0e0e0 360deg)`;
        } else {
            chartOuter.style.background = `conic-gradient(#e0e0e0 0deg, #e0e0e0 360deg)`;
        }
        if (porcentajeRegular > 0) {
            chartInner.style.background = `conic-gradient(#ffc107 0deg, #ffc107 ${porcentajeRegular * 3.6}deg, #e0e0e0 ${porcentajeRegular * 3.6}deg, #e0e0e0 360deg)`;
        } else {
            chartInner.style.background = `conic-gradient(#e0e0e0 0deg, #e0e0e0 360deg)`;
        }
        progressNumber.textContent = `${porcentajePromocionadas}%`;
    }
}

// Actualizar estadísticas (adaptado)
function updateEstadisticas() {
    const totalMaterias = planEstudiosActual.cuatrimestres.reduce((total, cuat) => total + cuat.materias.length, 0);
    const materiasPromocionadas = Object.values(estadoMateriasPorPlan[planSeleccionado]).filter(estado =>
        estado === 'promocionada' || estado === 'final-aprobado'
    ).length;
    const materiasSoloRegular = Object.values(estadoMateriasPorPlan[planSeleccionado]).filter(estado => estado === 'regular').length;
    const materiasDisponibles = planEstudiosActual.cuatrimestres.reduce((total, cuat) => {
        return total + cuat.materias.filter(m => puedeCursarMateria(m) && !estadoMateriasPorPlan[planSeleccionado][m.codigo]).length;
    }, 0);
    const materiasBloqueadas = planEstudiosActual.cuatrimestres.reduce((total, cuat) => {
        return total + cuat.materias.filter(m => !puedeCursarMateria(m) && !estadoMateriasPorPlan[planSeleccionado][m.codigo]).length;
    }, 0);
    if (document.getElementById('materiasPromocionadas')) {
        document.getElementById('materiasPromocionadas').textContent = materiasPromocionadas;
    }
    if (document.getElementById('materiasSoloRegular')) {
        document.getElementById('materiasSoloRegular').textContent = materiasSoloRegular;
    }
    document.getElementById('materiasDisponibles').textContent = materiasDisponibles;
    document.getElementById('totalMaterias').textContent = totalMaterias;
    if (document.getElementById('resumenAprobadas')) {
        const totalAprobadas = materiasPromocionadas + materiasSoloRegular;
        document.getElementById('resumenAprobadas').textContent = totalAprobadas;
        document.getElementById('resumenRegulares').textContent = materiasSoloRegular;
        document.getElementById('resumenDisponibles').textContent = materiasDisponibles;
        document.getElementById('resumenBloqueadas').textContent = materiasBloqueadas;
    }
}

// Resetear simulador (adaptado)
function resetearSimulador() {
    if (confirm('¿Estás seguro de que quieres resetear el simulador? Se perderán todos los progresos guardados para este plan.')) {
        estadoMateriasPorPlan[planSeleccionado] = {};
        saveEstadoMaterias();
        renderTimelineCuatrimestres();
        updateProgresoChart();
        updateEstadisticas();
        mostrarNotificacion('Simulador reseteado correctamente', 'success');
    }
}

// Función para iniciar el simulador (corregida)
function iniciarSimulador() {
    const selector = document.getElementById('planSelector');
    const planValue = selector ? selector.value : planSeleccionado;
    if (planValue === '17.14') {
        document.getElementById('contenidoSimulador').style.display = 'none';
        mostrarNotificacion('El simulador del plan 17.14 está en desarrollo.', 'error');
        return;
    }
    document.getElementById('contenidoSimulador').style.display = 'block';
    const iniciarDiv = document.querySelector('.iniciar-simulador');
    if (iniciarDiv) iniciarDiv.style.display = 'none';
    // Inicializar el simulador para el plan seleccionado
    initializeSimulador();
    // Asignar listeners a los botones (ahora que existen en el DOM)
    const btnSugerir = document.getElementById('btnSugerirMaterias');
    if (btnSugerir) {
        btnSugerir.onclick = sugerirMateriasDisponibles;
    }
    const btnExportarPDF = document.getElementById('btnExportarPDF');
    if (btnExportarPDF) {
        btnExportarPDF.onclick = exportarAvancePDF;
    }
    mostrarNotificacion('¡Simulador iniciado! Comienza a marcar tu progreso académico', 'success');
}

// Cambiar de plan desde el selector (corregido para resetear visualmente)
const planSelector = document.getElementById('planSelector');
if (planSelector) {
    planSelector.addEventListener('change', function() {
        // Ocultar el contenido y mostrar el botón de iniciar
        document.getElementById('contenidoSimulador').style.display = 'none';
        const iniciarDiv = document.querySelector('.iniciar-simulador');
        if (iniciarDiv) iniciarDiv.style.display = 'block';
        // No inicializar el simulador hasta que el usuario haga clic en iniciar
    });
}

// Sugerir materias disponibles para el próximo cuatrimestre
function sugerirMateriasDisponibles() {
    const plan = planEstudiosActual;
    const avance = estadoMateriasPorPlan[planSeleccionado];
    let sugeridas = [];
    // Buscar materias disponibles (puedeCursarMateria==true y no aprobada)
    plan.cuatrimestres.forEach((cuat, idx) => {
        cuat.materias.forEach(materia => {
            if (!avance[materia.codigo] || avance[materia.codigo] === 'pendiente') {
                if (puedeCursarMateria(materia)) {
                    sugeridas.push({
                        cuatrimestre: cuat.nombre,
                        codigo: materia.codigo,
                        nombre: materia.nombre
                    });
                }
            }
        });
    });
    // Mostrar sugerencias
    const cont = document.getElementById('sugerenciasMaterias');
    if (sugeridas.length === 0) {
        cont.innerHTML = '<div class="progreso-resumen" style="color:#388e3c;">¡Ya puedes cursar todas las materias o has completado el plan!</div>';
    } else {
        cont.innerHTML = '<div class="progreso-resumen"><b>Materias que puedes cursar el próximo cuatrimestre:</b><ul style="margin:0; padding-left:1.2em;">' +
            sugeridas.map(m => `<li><b>${m.codigo}</b> - ${m.nombre} <span style='color:#888;font-size:0.9em;'>(${m.cuatrimestre})</span></li>`).join('') +
            '</ul></div>';
    }
    cont.style.display = 'block';
    setTimeout(() => { cont.style.display = 'none'; }, 12000); // Ocultar después de 12s
}

// Exportar avance en PDF (corregido para jsPDF UMD)
function exportarAvancePDF() {
    let jsPDFClass = null;
    if (window.jspdf && window.jspdf.jsPDF) {
        jsPDFClass = window.jspdf.jsPDF;
    } else if (typeof jsPDF !== 'undefined') {
        jsPDFClass = jsPDF;
    }
    if (!jsPDFClass) {
        mostrarNotificacion('jsPDF no está cargado. Agrega la librería jsPDF para exportar a PDF.', 'error');
        return;
    }
    const doc = new jsPDFClass();
    const plan = planEstudiosActual;
    const avance = estadoMateriasPorPlan[planSeleccionado];
    // Calcular porcentaje de avance (solo promocionadas/final-aprobado)
    const totalMaterias = plan.cuatrimestres.reduce((total, cuat) => total + cuat.materias.length, 0);
    const materiasPromocionadas = Object.values(avance).filter(estado => estado === 'promocionada' || estado === 'final-aprobado').length;
    const porcentaje = totalMaterias > 0 ? Math.round((materiasPromocionadas / totalMaterias) * 100) : 0;
    let y = 15;
    doc.setFontSize(16);
    doc.text(`Avance académico - Plan ${planSeleccionado} (Avance: ${porcentaje}%)`, 10, y);
    y += 8;
    doc.setFontSize(11);
    plan.cuatrimestres.forEach((cuat, idx) => {
        doc.setFont(undefined, 'bold');
        doc.text(`${cuat.nombre}`, 10, y);
        y += 6;
        doc.setFont(undefined, 'normal');
        cuat.materias.forEach(materia => {
            let estado = avance[materia.codigo] || 'Pendiente';
            if (estado === 'pendiente') estado = 'Pendiente';
            if (estado === 'regular') estado = 'Regular';
            if (estado === 'promocionada') estado = 'Promocionada';
            if (estado === 'final-aprobado') estado = 'Final Aprobado';
            doc.text(`${materia.codigo} - ${materia.nombre} [${estado}]`, 14, y);
            y += 6;
            if (y > 270) { doc.addPage(); y = 15; }
        });
        y += 2;
    });
    doc.save(`avance_plan_${planSeleccionado}.pdf`);
}
