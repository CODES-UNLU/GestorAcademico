console.log('Simulador Plan 17.14 listo.');
// Mantener solo: lógica de simulador 17.14, timeline, avance, barra, PDF, sugerencias
// Eliminar: login, Sheets, plan 17.13, helpers globales innecesarios

// Estructura del plan 17.14 (copiada desde script.js)
const plan1714 = [
    { numero: 1, nombre: "Primer Cuatrimestre", materias: [
      { codigo: "11271", nombre: "Introducción a la Programación", correlativas: [] },
      { codigo: "13014", nombre: "Matemática Básica", correlativas: [] },
      { codigo: "21256", nombre: "Introducción a los Sistemas de Información", correlativas: [] }
    ]},
    { numero: 2, nombre: "Segundo Cuatrimestre", materias: [
      { codigo: "11274", nombre: "Programación Estructurada", correlativas: ["11271"] },
      { codigo: "11256", nombre: "Sistemas de Información I", correlativas: ["21256"] },
      { codigo: "41407", nombre: "Organización de Computadoras", correlativas: ["13014"] },
      { codigo: "13021", nombre: "Álgebra Lineal y Geometría", correlativas: ["13014"] }
    ]},
    { numero: 3, nombre: "Tercer Cuatrimestre", materias: [
      { codigo: "11275", nombre: "Estructuras de Datos y Algoritmos I", correlativas: ["13014", "11274"] },
      { codigo: "11258", nombre: "Sistemas de Información II", correlativas: ["11256"] },
      { codigo: "13022", nombre: "Análisis Matemático I", correlativas: ["13014"] },
      { codigo: "41426", nombre: "Arquitectura de Computadoras", correlativas: ["11271", "41407"] }
    ]},
    { numero: 4, nombre: "Cuarto Cuatrimestre", materias: [
      { codigo: "11276", nombre: "Programación Orientada a Objetos", correlativas: ["11275"] },
      { codigo: "13923", nombre: "Análisis Matemático II", correlativas: ["13022"] },
      { codigo: "11259", nombre: "Sistemas de Información III", correlativas: ["11258"] },
      { codigo: "11410", nombre: "Sistemas Operativos", correlativas: ["41426", "11274"] }
    ]},
    { numero: 5, nombre: "Quinto Cuatrimestre", materias: [
      { codigo: "11083", nombre: "Estadística y Probabilidad", correlativas: ["19054", "13022"] },
      { codigo: "14027", nombre: "Fundamentos de Redes de Datos", correlativas: ["11410"] },
      { codigo: "11286", nombre: "Programación en Ambiente Web", correlativas: ["11276", "11410"] },
      { codigo: "11277", nombre: "Bases de Datos Relacionales", correlativas: ["11256", "11275", "11410"] }
    ]},
    { numero: 6, nombre: "Sexto Cuatrimestre", materias: [
      { codigo: "21279", nombre: "Gestión de Soluciones Innovadoras", correlativas: ["11258"] },
      { codigo: "11287", nombre: "Seminario de Integración Profesional", correlativas: ["11259", "11277", "11286"] }
    ]},
    { numero: 7, nombre: "Séptimo Cuatrimestre (Licenciatura)", materias: [
      { codigo: "11278", nombre: "Bases de Datos Distribuidas", correlativas: ["14027", "11277"] },
      { codigo: "14028", nombre: "Matemática Computacional", correlativas: ["13923", "11083"] },
      { codigo: "14029", nombre: "Administración de Redes", correlativas: ["14027", "14028"] },
      { codigo: "14030", nombre: "Estructuras de Datos y Algoritmos II", correlativas: ["11275", "14028"] },
      { codigo: "14031", nombre: "Teoría de la Computación", correlativas: ["14028", "11275"] },
      { codigo: "11260", nombre: "Sistemas de Información IV", correlativas: ["11259"] }
    ]},
    { numero: 8, nombre: "Octavo Cuatrimestre (Licenciatura)", materias: [
      { codigo: "11288", nombre: "Gestión de Datos Masivos", correlativas: ["11278", "14027", "11083"] },
      { codigo: "14032", nombre: "Diseño Avanzado de Software", correlativas: ["14030", "11277"] },
      { codigo: "41429", nombre: "Sistemas Distribuidos y Programación Paralela", correlativas: ["14029", "11286"] },
      { codigo: "14034", nombre: "Modelos de decisión y optimización", correlativas: ["14028", "14030"] }
    ]},
    { numero: 9, nombre: "Noveno Cuatrimestre (Licenciatura)", materias: [
      { codigo: "11292", nombre: "Seguridad Informática", correlativas: ["14029", "11260"] },
      { codigo: "11289", nombre: "Inteligencia Artificial", correlativas: ["13021", "11083", "14030"] },
      { codigo: "14033", nombre: "Bases de Datos Textuales", correlativas: ["11288"] }
    ]},
    { numero: 10, nombre: "Décimo Cuatrimestre (Licenciatura)", materias: [
      { codigo: "21258", nombre: "Gestión de Proyectos", correlativas: ["21279"] },
      { codigo: "21257", nombre: "Aspectos Profesionales y Sociales", correlativas: ["21279"] },
      { codigo: "11091", nombre: "Taller de Tesina", correlativas: ["IX"] }
    ]}
];

// Estados posibles
const ESTADOS = [
    { key: 'pendiente', label: 'X', title: 'Pendiente' },
    { key: 'cursando', label: 'C', title: 'Cursando' },
    { key: 'regular', label: 'R', title: 'Regular' },
    { key: 'final-aprobado', label: 'F', title: 'Final aprobado' },
    { key: 'promocionada', label: 'P', title: 'Promocionada' }
];

// Guardar avance por usuario
function getAvanceKey() {
    return 'avance_1714';
}
function saveAvance(avance) {
    localStorage.setItem(getAvanceKey(), JSON.stringify(avance));
}
function loadAvance() {
    try {
        return JSON.parse(localStorage.getItem(getAvanceKey())) || {};
    } catch { return {}; }
}

// Verifica si una materia puede ser cursada
function puedeCursarMateria(materia, avance) {
    if (!materia.correlativas || materia.correlativas.length === 0) return true;
    return materia.correlativas.every(cor => {
        const estado = avance[cor];
        return estado === 'regular' || estado === 'promocionada' || estado === 'final-aprobado';
    });
}

// Renderizar simulador
function renderSimulador1714() {
    const avance = loadAvance();
    let html = '';
    // Barra de progreso
    // html += `<div id="barraProgresoContainer" style="width:100%;max-width:700px;margin:1.5em auto 0.5em auto;padding:0 1em;">
    //     <div style="background:#e3e3e3;border-radius:12px;height:22px;position:relative;width:100%;">
    //         <div id="barraProgreso" style="background:linear-gradient(90deg,#667eea,#28a745);height:100%;border-radius:12px 0 0 12px;width:0%;transition:width 0.5s;"></div>
    //         <span id="barraProgresoTexto" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:1rem;font-weight:600;color:#333;">0%</span>
    //     </div>
    // </div>`;
    // Botón y sugerencias arriba del timeline
    html += '<div class="simulador-top-bar" style="display:flex;justify-content:center;margin-bottom:1.5em;">';
    html += '<button class="btn btn-secondary" id="btnSugerirMaterias" type="button">';
    html += '<i class="fas fa-lightbulb"></i> ¿Qué puedo cursar el próximo cuatrimestre?';
    html += '</button></div>';
    html += '<div id="sugerenciasMaterias" style="display:none; margin-bottom: 1rem;"></div>';
    html += '<div class="timeline-container">';
    plan1714.forEach(cuat => {
        html += `<div class="cuatrimestre-timeline">
            <div class="cuatrimestre-header"><div class="cuatrimestre-title">${cuat.nombre}</div></div>
            <div class="materias-grid">`;
        cuat.materias.forEach(mat => {
            const estado = avance[mat.codigo] || 'pendiente';
            const puede = puedeCursarMateria(mat, avance);
            let materiaClass = `materia-timeline estado-${estado}`;
            if (estado === 'pendiente') {
                materiaClass += puede ? ' disponible' : ' bloqueada';
            }
            html += `<div class="${materiaClass}" style="position:relative;">
                <div class="materia-nombre">${mat.nombre}</div>
                <div class="materia-info">
                    <div class="materia-codigo">${mat.codigo}</div>
                    <div class="estado-selector">`;
            ESTADOS.forEach(est => {
                html += `<button type="button" class="estado-btn estado-${est.key}${estado === est.key ? ' active' : ''}" title="${est.title}"
                    ${est.key === 'pendiente' && !puede ? 'disabled' : ''}
                    ${est.key !== 'pendiente' && !puede ? 'disabled' : ''}
                    onclick="cambiarEstadoMateria('${mat.codigo}', '${est.key}')">
                    <span class="estado-letra">${est.label}</span>
                </button>`;
            });
            html += `</div></div>`;
            // Leyenda textual del estado actual
            const leyendas = {
                'pendiente': 'Pendiente: aún no cursada ni disponible.',
                'cursando': 'Cursando: actualmente en curso.',
                'regular': 'Regular: cursada y regularizada, falta final.',
                'final-aprobado': 'Final aprobado: materia aprobada por final.',
                'promocionada': 'Promocionada: materia aprobada por promoción.'
            };
            html += `<div style='font-size:0.93em;color:#1976d2;margin-top:0.4em;'>${leyendas[estado]}</div>`;
            // Badge disponible/bloqueada
            if (estado === 'pendiente') {
                html += `<div style="position:absolute;bottom:8px;right:10px;background:${puede ? '#28a745' : '#dc3545'};color:#fff;padding:2px 10px;border-radius:20px;font-size:0.8rem;font-weight:bold;z-index:10;opacity:0.95;">${puede ? 'Disponible' : 'Bloqueada'}</div>`;
            }
            // Correlativas info
            if (mat.correlativas && mat.correlativas.length > 0) {
                html += `<div style='font-size:0.9em;color:#888;margin-top:0.3em;'>Correlativas: ${mat.correlativas.join(', ')}</div>`;
            }
            html += `</div>`;
        });
        html += '</div></div>';
    });
    html += '</div>';
    // Resumen y acciones
    html += '<div class="progreso-resumen" style="margin-top:2em;">' + resumenProgreso(avance) + '</div>';
    html += '<div style="margin-top:1.5em; display:flex; gap:1em; justify-content:center; flex-wrap:wrap;">' +
        '<button class="btn btn-secondary" id="btnResetSimulador"><i class="fas fa-undo"></i> Resetear Simulador</button>' +
        '<button class="btn btn-primary" id="btnExportarPDF"><i class="fas fa-file-pdf"></i> Descargar avance en PDF</button>' +
        '</div>';
    document.getElementById('contenidoSimulador').innerHTML = html;
    updateBarraProgreso();
    // Acciones
    document.getElementById('btnResetSimulador').onclick = function() {
        if (confirm('¿Seguro que quieres resetear el simulador?')) {
            saveAvance({});
            renderSimulador1714();
        }
    };
    document.getElementById('btnExportarPDF').onclick = function() {
        exportarAvancePDF();
    };
    // Sugerir materias disponibles
    document.getElementById('btnSugerirMaterias').onclick = function() {
        sugerirMateriasDisponibles();
    };
}

// Cambiar estado de materia
window.cambiarEstadoMateria = function(codigo, nuevoEstado) {
    const avance = loadAvance();
    avance[codigo] = nuevoEstado;
    saveAvance(avance);
    renderSimulador1714();
    updateBarraProgreso();
};

// Resumen de progreso (ordenado)
function resumenProgreso(avance) {
    const total = plan1714.reduce((acc, cuat) => acc + cuat.materias.length, 0);
    const estados = { 'pendiente': 0, 'cursando': 0, 'regular': 0, 'final-aprobado': 0, 'promocionada': 0 };
    for (const cuat of plan1714) {
        for (const mat of cuat.materias) {
            estados[avance[mat.codigo] || 'pendiente']++;
        }
    }
    const aprobadas = estados['final-aprobado'] + estados['promocionada'];
    const avancePorc = Math.round((aprobadas / total) * 100);
    return `
        <h4><i class="fas fa-chart-line"></i> Resumen de Progreso</h4>
        <div class="resumen-stats">
            <div class="resumen-stat"><span class="numero">${aprobadas}</span><span class="etiqueta">Aprobadas</span></div>
            <div class="resumen-stat"><span class="numero">${estados['promocionada']}</span><span class="etiqueta">Promocionadas</span></div>
            <div class="resumen-stat"><span class="numero">${estados['final-aprobado']}</span><span class="etiqueta">Finales dados</span></div>
            <div class="resumen-stat"><span class="numero">${estados['regular']}</span><span class="etiqueta">Regulares</span></div>
            <div class="resumen-stat"><span class="numero">${estados['cursando']}</span><span class="etiqueta">Cursando</span></div>
            <div class="resumen-stat"><span class="numero">${estados['pendiente']}</span><span class="etiqueta">Pendientes</span></div>
            <div class="resumen-stat"><span class="numero">${avancePorc}%</span><span class="etiqueta">Avance total</span></div>
        </div>
    `;
}

// Exportar avance en PDF (diseño profesional)
function exportarAvancePDF() {
    if (typeof window.jspdf === 'undefined' && typeof window.jsPDF === 'undefined') {
        alert('jsPDF no está cargado. Agrega la librería jsPDF para exportar a PDF.');
        return;
    }
    const jsPDFClass = window.jspdf?.jsPDF || window.jsPDF;
    const doc = new jsPDFClass({ unit: 'pt', format: 'a4' });
    const avance = loadAvance();
    const fecha = new Date();
    // Al guardar el PDF:
    const fechaStr = fecha.getFullYear() + '-' + String(fecha.getMonth()+1).padStart(2,'0') + '-' + String(fecha.getDate()).padStart(2,'0') + '_' + String(fecha.getHours()).padStart(2,'0') + '-' + String(fecha.getMinutes()).padStart(2,'0');
    // Agregar logo institucional (mantener proporción)
    const logoImg = new Image();
    logoImg.src = 'LOGO SIN FONDO.png';
    logoImg.onload = function() {
        const logoW = 80;
        const aspect = logoImg.width / logoImg.height;
        const logoH = logoW / aspect;
        doc.addImage(logoImg, 'PNG', 480, 30, logoW, logoH);
        renderPDFContent(doc, avance, fecha, fechaStr);
    };
    if (logoImg.complete) {
        const logoW = 80;
        const aspect = logoImg.width / logoImg.height;
        const logoH = logoW / aspect;
        doc.addImage(logoImg, 'PNG', 480, 30, logoW, logoH);
        renderPDFContent(doc, avance, fecha, fechaStr);
    }
}

function renderPDFContent(doc, avance, fecha, fechaStr) {
    let y = 50;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(51,51,51);
    doc.text('Simulador de Avance - Plan 17.14', 40, y);
    y += 28;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80,80,80);
    doc.text(`Fecha: ${fecha.toLocaleDateString()}`, 40, y);
    y += 24;
    // Resumen de progreso
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(51,51,51);
    doc.text('Resumen de Progreso', 40, y);
    y += 18;
    const estados = { 'pendiente': 0, 'cursando': 0, 'regular': 0, 'final-aprobado': 0, 'promocionada': 0 };
    let total = 0;
    for (const cuat of plan1714) {
        for (const mat of cuat.materias) {
            estados[avance[mat.codigo] || 'pendiente']++;
            total++;
        }
    }
    const aprobadas = estados['final-aprobado'] + estados['promocionada'];
    const avancePorc = Math.round((aprobadas / total) * 100);
    // Tabla resumen
    const resumen = [
        ['Aprobadas', aprobadas],
        ['Promocionadas', estados['promocionada']],
        ['Finales dados', estados['final-aprobado']],
        ['Regulares', estados['regular']],
        ['Cursando', estados['cursando']],
        ['Pendientes', estados['pendiente']],
        ['Avance total', avancePorc + '%']
    ];
    let x0 = 40, colW = 120, rowH = 24;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    resumen.forEach((row, i) => {
        const bg = i % 2 === 0 ? [240,245,255] : [255,255,255];
        doc.setFillColor(...bg);
        doc.roundedRect(x0, y, colW, rowH, 6, 6, 'F');
        doc.roundedRect(x0+colW, y, colW, rowH, 6, 6, 'F');
        doc.setTextColor(51,51,51);
        doc.text(row[0], x0+12, y+16);
        doc.setFont('helvetica', 'bold');
        doc.text(String(row[1]), x0+colW+colW-12, y+16, {align:'right'});
        doc.setFont('helvetica', 'normal');
        y += rowH;
    });
    y += 18;
    // Tabla de materias
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(51,51,51);
    doc.text('Detalle de Materias', 40, y);
    y += 16;
    // Encabezados
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setFillColor(102,126,234);
    doc.setTextColor(255,255,255);
    doc.rect(40, y, 70, rowH, 'F');
    doc.rect(110, y, 220, rowH, 'F');
    doc.rect(330, y, 80, rowH, 'F');
    doc.rect(410, y, 80, rowH, 'F');
    doc.rect(490, y, 80, rowH, 'F');
    doc.text('Código', 45, y+16);
    doc.text('Materia', 115, y+16);
    doc.text('Cuatr.', 335, y+16);
    doc.text('Estado', 415, y+16);
    doc.text('Disp./Bloq.', 495, y+16);
    y += rowH;
    doc.setFont('helvetica', 'normal');
    // Materias
    plan1714.forEach((cuat, idx) => {
        cuat.materias.forEach(mat => {
            const estado = avance[mat.codigo] || 'pendiente';
            const puede = puedeCursarMateria(mat, avance);
            const estadoLabel = {
                'pendiente': 'Pendiente',
                'cursando': 'Cursando',
                'regular': 'Regular',
                'final-aprobado': 'Final aprobado',
                'promocionada': 'Promocionada'
            }[estado] || estado;
            const disp = estado === 'pendiente' ? (puede ? 'Disponible' : 'Bloqueada') : '-';
            // Alternar color de fondo
            const bg = idx % 2 === 0 ? [255,255,255] : [245,250,255];
            doc.setFillColor(...bg);
            doc.rect(40, y, 70, rowH, 'F');
            doc.rect(110, y, 220, rowH, 'F');
            doc.rect(330, y, 80, rowH, 'F');
            doc.rect(410, y, 80, rowH, 'F');
            doc.rect(490, y, 80, rowH, 'F');
            doc.setTextColor(51,51,51);
            doc.text(mat.codigo, 45, y+16);
            doc.text(mat.nombre, 115, y+16, {maxWidth:210});
            doc.text(String(cuat.numero), 335, y+16);
            doc.text(estadoLabel, 415, y+16);
            doc.text(disp, 495, y+16);
            y += rowH;
            if (y > 750) {
                doc.addPage();
                y = 50;
            }
        });
    });
    // Pie de página
    doc.setFontSize(9);
    doc.setTextColor(120,120,120);
    doc.text('Generado por el Simulador de Avance - Plan 17.14', 297.5, 820, {align:'center'});
    doc.save('avance_plan_1714-' + fechaStr + '.pdf');
}

function updateBarraProgreso() {
    const avance = loadAvance();
    let total = 0, aprobadas = 0;
    for (const cuat of plan1714) {
        for (const mat of cuat.materias) {
            total++;
            const estado = avance[mat.codigo] || 'pendiente';
            if (estado === 'final-aprobado' || estado === 'promocionada') aprobadas++;
        }
    }
    const porc = total > 0 ? Math.round((aprobadas / total) * 100) : 0;
    const barra = document.getElementById('barraProgreso');
    const texto = document.getElementById('barraProgresoTexto');
    if (barra) barra.style.width = porc + '%';
    if (texto) texto.textContent = porc + '%';
}

// Inicialización y eventos
window.addEventListener('DOMContentLoaded', function() {
    const contenido = document.getElementById('contenidoSimulador');
    if (contenido) {
        contenido.style.display = 'block';
        renderSimulador1714();
    }
});

function sugerirMateriasDisponibles() {
    const cont = document.getElementById('sugerenciasMaterias');
    if (cont.style.display === 'block') {
        cont.style.display = 'none';
        return;
    }
    const avance = loadAvance();
    let sugeridas = [];
    // Detectar mes actual para sugerir cuatrimestre
    const mes = new Date().getMonth() + 1; // 1-12
    let tipoCuat = 'ambos';
    if (mes >= 3 && mes <= 7) {
        tipoCuat = 'par'; // Marzo a Julio: cuatrimestres pares
    } else if (mes >= 8 && mes <= 11) {
        tipoCuat = 'impar'; // Agosto a Noviembre: cuatrimestres impares
    }
    plan1714.forEach((cuat, idx) => {
        const esImpar = cuat.numero % 2 === 1;
        const esPar = cuat.numero % 2 === 0;
        if (
            tipoCuat === 'ambos' ||
            (tipoCuat === 'impar' && esImpar) ||
            (tipoCuat === 'par' && esPar)
        ) {
            cuat.materias.forEach(materia => {
                if (!avance[materia.codigo] || avance[materia.codigo] === 'pendiente') {
                    if (puedeCursarMateria(materia, avance)) {
                        sugeridas.push({
                            cuatrimestre: cuat.nombre,
                            codigo: materia.codigo,
                            nombre: materia.nombre
                        });
                    }
                }
            });
        }
    });
    // Mostrar sugerencias
    if (sugeridas.length === 0) {
        cont.innerHTML = '<div class="progreso-resumen" style="color:#388e3c;">¡Ya puedes cursar todas las materias o has completado el plan!</div>';
    } else {
        cont.innerHTML = '<div class="progreso-resumen"><b>Materias que puedes cursar el próximo cuatrimestre:</b><ul style="margin:0; padding-left:1.2em;">' +
            sugeridas.map(m => `<li><b>${m.codigo}</b> - ${m.nombre} <span style='color:#888;font-size:0.9em;'>(${m.cuatrimestre})</span></li>`).join('') +
            '</ul></div>';
    }
    cont.style.display = 'block';
    setTimeout(() => { cont.style.display = 'none'; }, 12000);
}
