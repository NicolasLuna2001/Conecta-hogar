document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ==========================
// 1. MENÚ CON SCROLL SUAVE
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        if (destino) {
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ==========================
// 2. NAVBAR DINÁMICO
// ==========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        // Al hacer scroll, aplicamos estilos limpios
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0px 4px 15px rgba(0,0,0,.1)";
    } else {
        // Estado inicial (transparente o con nuestro color corporativo claro)
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "none";
    }
});

// ==========================
// 3. BOTONES CLIENTE / PROFESIONAL
// ==========================
const botones = document.querySelectorAll(".user-type button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        botones.forEach(b => {
            b.style.background = "transparent";
            b.style.color = "var(--navy)"; // Usamos nuestra variable corporativa
        });

        boton.style.background = "var(--pink)"; // Usamos nuestra variable corporativa
        boton.style.color = "white";
    });
});


// ==========================
// 1. BUSCADOR INTELIGENTE
// ==========================
const btnBuscar = document.querySelector(".search-box button");
const inputBuscar = document.querySelector(".search-box input");

btnBuscar.addEventListener("click", () => {
    const texto = inputBuscar.value.trim(); // .trim() elimina espacios vacíos innecesarios
    
    if (!texto) {
        alert("Por favor, ingresa el servicio que buscas.");
        return;
    }
    
    // Aquí en el futuro conectarás con tu base de datos o API
    console.log("Buscando servicio:", texto);
    alert("Estamos buscando expertos en: " + texto);
});

// ==========================
// 2. CONTADORES ANIMADOS
// ==========================
const numeros = document.querySelectorAll(".stats h3");
const valoresObjetivo = [2400, 18000, 98];

function animarContador(elemento, objetivo) {
    let contador = 0;
    const velocidad = 80; // Pasos de animación
    const incremento = objetivo / velocidad;

    const intervalo = setInterval(() => {
        contador += incremento;
        
        if (contador >= objetivo) {
            contador = objetivo;
            clearInterval(intervalo);
        }

        // Lógica de formato (Si es el último, es porcentaje, si no, número)
        const valorFinal = Math.floor(contador);
        elemento.innerHTML = (objetivo === 98) ? `${valorFinal}%` : `+${valorFinal.toLocaleString()}`;
    }, 20);
}

// Activación al hacer scroll
let animacionIniciada = false;
window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats");
    if (!statsSection) return; // Seguridad extra
    
    const posicion = statsSection.getBoundingClientRect().top;

    if (posicion < window.innerHeight && !animacionIniciada) {
        animacionIniciada = true;
        numeros.forEach((numero, index) => {
            animarContador(numero, valoresObjetivo[index]);
        });
    }
});



// ==========================
// 1. ANIMACIÓN AL HACER SCROLL (IntersectionObserver)
// ==========================
const observerOptions = {
    threshold: 0.1 // Se activa cuando el 10% de la sección es visible
};

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
            // Opcional: deja de observar para ahorrar recursos
            observer.unobserve(entrada.target); 
        }
    });
}, observerOptions);

document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("ocultar"); // Aseguramos que empiecen ocultas
    observer.observe(sec);
});

// ==========================
// 2. INTERACCIÓN DE BOTONES
// ==========================

// Botón Principal
const btnPrincipal = document.querySelector(".btn-primary");
if (btnPrincipal) {
    btnPrincipal.addEventListener("click", (e) => {
        // En el futuro, aquí pondrías window.location.href = "formulario.html"
        console.log("Iniciando flujo de solicitud...");
    });
}

// Botones Contactar (Uso de delegación de eventos si fuera necesario)
const btnContactar = document.querySelectorAll(".professional-cards button");
btnContactar.forEach(boton => {
    boton.addEventListener("click", () => {
        alert("¡Estamos trabajando para que puedas conectar pronto con nuestros profesionales!");
    });
});



