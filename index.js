// ==========================
// MENÚ CON SCROLL SUAVE
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// ==========================
// NAVBAR AL HACER SCROLL
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0px 8px 25px rgba(0,0,0,.12)";

    }else{

        navbar.style.background = "#b9eef7";
        navbar.style.boxShadow = "none";

    }

});


// ==========================
// BOTONES CLIENTE / PROFESIONAL
// ==========================

const botones = document.querySelectorAll(".user-type button");

botones.forEach(boton=>{

    boton.addEventListener("click", ()=>{

        botones.forEach(b=>{

            b.style.background = "transparent";
            b.style.color = "#006f86";

        });

        boton.style.background = "#eb2f66";
        boton.style.color = "white";

    });

});


// ==========================
// BUSCADOR
// ==========================

const buscar = document.querySelector(".search-box button");

buscar.addEventListener("click", ()=>{

    const texto = document.querySelector(".search-box input").value;

    if(texto==""){

        alert("Ingrese un servicio.");

    }else{

        alert("Buscando: " + texto);

    }

});


// ==========================
// CONTADORES
// ==========================

const numeros = document.querySelectorAll(".stats h3");

const valores = [

2400,
18000,
98

];

function animarContador(elemento, objetivo){

    let contador = 0;

    const incremento = objetivo / 80;

    const intervalo = setInterval(()=>{

        contador += incremento;

        if(contador >= objetivo){

            contador = objetivo;
            clearInterval(intervalo);
        }

        if(objetivo == 98){

            elemento.innerHTML = Math.floor(contador)+"%";

        }else{

            elemento.innerHTML = "+"+Math.floor(contador).toLocaleString();

        }

    },20);

}

let iniciado = false;

window.addEventListener("scroll", ()=>{

    const stats = document.querySelector(".stats");

    const posicion = stats.getBoundingClientRect().top;

    if(posicion < window.innerHeight && !iniciado){

        iniciado = true;

        numeros.forEach((numero,index)=>{

            animarContador(numero,valores[index]);

        });

    }

});


// ==========================
// ANIMACIÓN AL HACER SCROLL
// ==========================

const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

});

secciones.forEach(sec=>{

    observer.observe(sec);

});


// ==========================
// BOTÓN SOLICITAR SERVICIO
// ==========================

const botonPrincipal = document.querySelector(".btn-primary");

botonPrincipal.addEventListener("click", ()=>{

    alert("Redirigiendo al formulario de solicitud...");

});


// ==========================
// BOTONES CONTACTAR
// ==========================

const contactar = document.querySelectorAll(".professional-cards button");

contactar.forEach(boton=>{

    boton.addEventListener("click", ()=>{

        alert("Próximamente podrás contactar directamente con este profesional.");

    });


       // ==========================================
   // 3. EFECTO DINÁMICO EN EL NAVBAR AL HACER SCROLL//
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            navbar.style.padding = '10px 40px'; // Se vuelve sutilmente más delgada
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(8px)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 40px';
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // ===============================
// Profesionales Destacados
// ===============================
 
const profileButtons = document.querySelectorAll(".btn-profile");
 
document.querySelectorAll('.prof-btn-contratar').forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.dataset.nombre || 'este profesional';
    // TODO: reemplazar este alert por su lógica real
    // (ej: abrir modal de contacto, o redirigir a /contratar?pro=...)
    alert(`Pronto podrás contratar a ${nombre} 🙌`);
  });
});

});

