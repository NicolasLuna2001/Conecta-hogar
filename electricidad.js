
// electricidad.js

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los botones de las tarjetas
    const botonesContratar = document.querySelectorAll('.btn-primary');

    botonesContratar.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('¡Gracias por tu interés! Un profesional se pondrá en contacto pronto.');
            console.log('Servicio seleccionado exitosamente.');
        });
    });
});

// electricidad.js

// 1. Definimos los datos
const servicios = [
    {
        titulo: "Instalaciones Eléctricas",
        descripcion: "Cableado completo, interruptores y tomas de corriente.",
        img: "imports/cableado_completo.jpg" 
    },
    {
        titulo: "Reparación de Averías",
        descripcion: "Solución rápida para los cortes de luz, cortocircuitos y otras averías.",
        img: "imports/electricista.jpg"
    },
    {
        titulo: "Iluminación LED",
        descripcion: "Sistemas de iluminación eficientes y elegantes para ti y los tuyos.",
        img: "imports/luz_led.png"
    }
];

// 2. Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('lista-servicios');
    
    // Verificamos si el contenedor existe antes de hacer nada
    if (contenedor) {
        contenedor.innerHTML = servicios.map(servicio => `
            <div class="col">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="${servicio.img}" class="card-img-top" alt="${servicio.titulo}">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${servicio.titulo}</h5>
                        <p class="card-text text-muted">${servicio.descripcion}</p>
                        <button class="btn btn-primary w-100 mt-3">Contratar</button>
                    </div>
                </div>
            </div>
        `).join('');
    } else {
        console.error("Error: No encontré el elemento con ID 'lista-servicios'");
    }
});