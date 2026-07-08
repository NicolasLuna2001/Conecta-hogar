
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".tarjeta-slide");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    let index = 0;

    function cambiarSlide(nextIndex) {
        slides[index].classList.remove("active");
        index = (nextIndex + slides.length) % slides.length;
        slides[index].classList.add("active");
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => cambiarSlide(index + 1));
        prevBtn.addEventListener("click", () => cambiarSlide(index - 1));
    }
});


document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    //1. EFECTO DE APARICIÓN AL HACER SCROLL (Fade In)//
    // ==========================================
    
    // Primero, seleccionamos todos los elementos que queremos que aparezcan con suavidad
    const elementsToAnimate = document.querySelectorAll('.commitment-card, .process-step, .cta-section');

    // Añadimos por código una clase inicial oculta para no romper el diseño si JS está desactivado
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    });

    // Creamos el observador que detecta cuándo el usuario llega al elemento
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el elemento entra en pantalla, lo hacemos visible y lo subimos a su posición
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Dejamos de observarlo para que la animación solo ocurra una vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px' // Margen inferior para que la animación empiece justo antes de aparecer del todo
    });

    // Activamos el observador para cada elemento
    elementsToAnimate.forEach(element => scrollObserver.observe(element));


    // ==========================================
   // 2. INTERACTIVIDAD EN LOS BOTONES (Efecto Feedback)//
    // ==========================================
    
    // Buscamos todos los botones principales y secundarios
    const buttons = document.querySelectorAll('.btn-primary-sm, .btn-white, .btn-primary-lg, .btn-secondary-lg');

    buttons.forEach(button => {
        // Efecto visual rápido al presionar (Click)
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.96)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = '';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });

        // Simulación de acción al hacer clic
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Evitamos que recargue la página por ser enlaces vacíos '#'
            
            const buttonText = button.textContent.replace('→', '').trim();
            console.log(`Acción ejecutada: ${buttonText}`);
            
            // Aquí podrías abrir un modal, redirigir o iniciar un flujo de registro
        });
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
});