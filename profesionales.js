// Datos base del sistema (especialidades, nombres y certificaciones).

const especialidades = [
  { key:"gasfiteria",   nombre:"Gasfitería",   color:"var(--turquoise)" },
  { key:"electricidad", nombre:"Electricidad", color:"var(--yellow)" },
  { key:"albanileria",  nombre:"Albañilería",  color:"var(--coral)" },
  { key:"carpinteria",  nombre:"Carpintería",  color:"var(--amber)" },
  { key:"techado",      nombre:"Techado",      color:"var(--teal)" },
  { key:"pintura",      nombre:"Pintura",      color:"var(--rose)" },
];

const NOMBRES = ["Juan","María","Pedro","Camila","Andrea","Luis","Manuel","Sofía","Tomás","Javiera","Diego","Rodrigo","Ignacio","Valentina","Cristóbal","Fernanda","Francisco","Ricardo","Carla","Matías","Constanza","Sebastián","Daniela","Felipe","Antonia","Gabriel","Paula","Nicolás","Fernanda","Josefa","Álvaro","Catalina","Cristian","Macarena","Rodrigo","Isidora","Vicente","Florencia","Emilio","Trinidad","Benjamín","Amanda","Joaquín","Rocío","Maximiliano","Belén","Agustín","Renata","Simón","Martina"];
const APELLIDOS = ["Pérez","González","Silva","Rojas","Fuentes","Herrera","Bravo","Muñoz","Espinoza","Contreras","Castro","Vargas","Reyes","Soto","Morales","Araya","Díaz","Torres","Sepúlveda","Vera","Cárdenas","Núñez","Fernández","Ramírez","Carrasco","Riquelme","Toro","Guzmán","Molina","Aravena","Tapia","Salinas","Godoy","Bustos","Parra","Concha","Ortiz","Cortés","Miranda","Valenzuela"];

const CERTIFICACIONES = {
  gasfiteria: ["Certificado SENCE - Gasfitería", "Técnico en Instalaciones Sanitarias", "Certificado en Gas y Calefacción SEC", "Técnico en Redes de Agua Potable"],
  electricidad: ["SEC Clase B", "Instalador Eléctrico Autorizado", "SEC Clase A - Instalaciones Industriales", "Técnico Electricista DUOC"],
  albanileria: ["Técnico en Construcción OTEC", "Maestro Albañil Certificado", "Técnico en Obras Civiles INACAP", "Certificado en Estructuras de Hormigón"],
  carpinteria: ["Técnico en Muebles y Terminaciones", "Maestro Carpintero Certificado", "Técnico en Diseño y Fabricación de Muebles", "Certificado en Carpintería en Obra"],
  techado: ["Instalador de Cubiertas Certificado", "Técnico en Cubiertas y Aislación", "Certificado en Impermeabilización", "Técnico en Estructuras de Techumbre"],
  pintura: ["Maestra Pintora Certificada", "Técnico en Pintura y Terminaciones", "Certificado en Pintura Decorativa", "Técnico en Revestimientos y Pintura Industrial"],
};

// Elimina las tildes para generar correos electrónicos.
function quitarTildes(str){
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}


// Genera una lista de profesionales de prueba por especialidad.
function generarProfesionales(cantidadPorCategoria = 40){
  const lista = [];
  let id = 1;
  especialidades.forEach((esp, catIdx) => {
    const certs = CERTIFICACIONES[esp.key];
    for(let i = 0; i < cantidadPorCategoria; i++){
      const nombre = NOMBRES[(i + catIdx * 5) % NOMBRES.length];
      const apellido = APELLIDOS[(i * 3 + catIdx * 7) % APELLIDOS.length];
      const certificacion = certs[i % certs.length];
      const likes = 20 + ((i * 13 + catIdx * 29) % 200);
      const dislikes = (i * 3 + catIdx) % 14;
      const numero = `569${String(10000000 + id).slice(-8)}`;
      lista.push({
        id: id,
        nombre: `${nombre} ${apellido}`,
        especialidad: esp.key,
        certificacion: certificacion,
        likes: likes,
        dislikes: dislikes,
        whatsapp: numero,
        telefono: `+56 9 ${numero.slice(3,7)} ${numero.slice(7)}`,
        email: `${quitarTildes(nombre.toLowerCase())}.${quitarTildes(apellido.toLowerCase())}@correo.cl`
      });
      id++;
    }
  });
  return lista;
}

const profesionales = generarProfesionales(40);

const container = document.getElementById('sectionsContainer');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');

// Obtiene las iniciales del nombre del profesional.
function iniciales(nombre){
  return nombre.split(' ').map(p=>p[0]).slice(0,2).join('').toUpperCase();
}

// Crea una tarjeta HTML con la información del profesional.
function crearTarjeta(p){
  const total = p.likes + p.dislikes;
  const pct = total ? Math.round((p.likes/total)*100) : 0;
  const esp = especialidades.find(e=>e.key===p.especialidad);

  let badgeClass, badgeLabel;
  if(pct >= 95){ badgeClass = 'top'; badgeLabel = 'Top Profesional'; }
  else if(pct >= 85){ badgeClass = 'verificada'; badgeLabel = 'Verificado'; }
  else { badgeClass = 'destacado'; badgeLabel = 'Destacado'; }

  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.search = (p.nombre + ' ' + esp.nombre + ' ' + p.certificacion).toLowerCase();

  card.innerHTML = `
    <div class="card-body">
      <div class="card-header">
        <div class="card-avatar-wrap" style="--card-accent:${esp.color}">
          <div class="card-avatar">${iniciales(p.nombre)}</div>
          <span class="status-dot"></span>
        </div>
        <div>
          <h3 class="card-name">${p.nombre}</h3>
          <span class="status-badge ${badgeClass}">${badgeLabel}</span>
          <p class="card-specialty">${esp.nombre}</p>
        </div>
      </div>

      <div class="info-row likes">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 22V11l5-9a2.5 2.5 0 0 1 2.5 3l-1 5H19a2 2 0 0 1 2 2.4l-1.6 7A2 2 0 0 1 17.5 22H7Z"/><path d="M7 11H4v11h3"/></svg>
        ${p.likes} <span>Me gusta</span>
      </div>
      <div class="info-row cert">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>${p.certificacion}</span>
      </div>

      <hr class="card-divider">

      <div class="card-actions">
        <button class="btn-contactar" type="button" data-id="${p.id}">Contactar</button>
        <a class="btn-llamar" href="tel:${p.whatsapp}" aria-label="Llamar a ${p.nombre}" onclick="event.stopPropagation()">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>
        </a>
      </div>
    </div>
  `;

  card.querySelector('.btn-contactar').addEventListener('click', () => abrirModal(p, esp));
  return card;
}

// Genera y muestra las secciones de profesionales por especialidad.
function renderSecciones(){
  container.innerHTML = '';
  especialidades.forEach(esp=>{
    const items = profesionales.filter(p=>p.especialidad===esp.key);
    if(items.length===0) return;

    const section = document.createElement('section');
    section.className = 'specialty-section';
    section.dataset.section = esp.key;

    const grid = document.createElement('div');
    grid.className = 'card-grid';
    items.forEach(p => grid.appendChild(crearTarjeta(p)));

    section.innerHTML = `
      <div class="section-head">
        <span class="section-dot" style="background:${esp.color}"></span>
        <h2>${esp.nombre}</h2>
        <span class="section-count">${items.length}</span>
      </div>
    `;
    section.appendChild(grid);
    container.appendChild(section);
  });
  aplicarFiltro('');
}

// Filtra las tarjetas según el texto ingresado en el buscador.
function aplicarFiltro(texto){
  const t = texto.trim().toLowerCase();
  let totalVisible = 0;

  document.querySelectorAll('.specialty-section').forEach(section=>{
    let visiblesEnSeccion = 0;
    section.querySelectorAll('.card').forEach(card=>{
      const coincide = !t || card.dataset.search.includes(t);
      card.style.display = coincide ? '' : 'none';
      if(coincide){ visiblesEnSeccion++; totalVisible++; }
    });
    section.style.display = visiblesEnSeccion > 0 ? '' : 'none';
  });

  emptyState.style.display = totalVisible === 0 ? 'block' : 'none';
  resultCount.textContent = t ? `${totalVisible} resultado${totalVisible!==1?'s':''}` : '';
}

// Eventos del buscador.
searchInput.addEventListener('input', e => aplicarFiltro(e.target.value));
document.getElementById('searchBtn').addEventListener('click', () => aplicarFiltro(searchInput.value));
searchInput.addEventListener('keydown', e => { if(e.key === 'Enter') aplicarFiltro(searchInput.value); });


// Gestión del modal de contacto.
const modalOverlay = document.getElementById('contactModal');

// Abre el modal y carga los datos del profesional seleccionado.
function abrirModal(p, esp){
  document.getElementById('modalAvatar').textContent = iniciales(p.nombre);
  document.getElementById('modalAvatar').style.background = esp.color;
  document.getElementById('modalName').textContent = p.nombre;
  document.getElementById('modalSpecialty').textContent = esp.nombre;

  document.getElementById('modalWhatsapp').href = `https://wa.me/${p.whatsapp}`;
  document.getElementById('modalWhatsappNum').textContent = p.telefono;

  document.getElementById('modalCall').href = `tel:${p.whatsapp}`;
  document.getElementById('modalCallNum').textContent = p.telefono;

  document.getElementById('modalMail').href = `mailto:${p.email}`;
  document.getElementById('modalMailAddr').textContent = p.email;

  modalOverlay.classList.add('open');
}

// Cierra el modal al hacer clic en el botón de cierre.
document.getElementById('closeModal').addEventListener('click', ()=> modalOverlay.classList.remove('open'));

// Cierra el modal al hacer clic fuera del contenido.
modalOverlay.addEventListener('click', e=>{ if(e.target === modalOverlay) modalOverlay.classList.remove('open'); });

// Cierra el modal al presionar la tecla Escape.
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') modalOverlay.classList.remove('open'); });

// Inicializa la visualización de las secciones.
renderSecciones();