const cliente = document.getElementById("cliente");
const profesional = document.getElementById("profesional");
const especialidades = document.getElementById("especialidades");

cliente.addEventListener("click", () => {

    cliente.classList.add("activo");
    profesional.classList.remove("activo");

    cliente.querySelector("input").checked = true;

    especialidades.style.display = "none";
});

profesional.addEventListener("click", () => {

    profesional.classList.add("activo");
    cliente.classList.remove("activo");

    profesional.querySelector("input").checked = true;

    especialidades.style.display = "block";
});

//validasion formolario 
const form = document.getElementById("registro");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const rut = document.getElementById("rut").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    if(!nombre || !rut || !correo || !direccion){
        alert("Debe completar todos los campos.");
        return;
    }

    const tipo = document.querySelector(
        'input[name="tipo"]:checked'
    );

    if(!tipo){
        alert("Debe seleccionar un tipo de usuario.");
        return;
    }

    if(tipo.value === "profesional"){

        const especialidades =
            document.querySelectorAll(
                '#especialidades input[type="checkbox"]:checked'
            );

        if(especialidades.length === 0){
            alert("Debe seleccionar al menos una especialidad.");
            return;
        }
    }

    alert("Formulario enviado correctamente");
    
    //validar correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexCorreo.test(correo)){
        alert("Correo inválido");
        return;
    }

    //validar nombre
    if(nombre.length < 3){
        alert("El nombre debe tener al menos 3 caracteres");
        return;
    }

    if(nombre === ""){
        document.getElementById("errorNombre")
            .innerText = "El nombre es obligatorio";
    }

    //validar rut
    const regexRut = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/;

    if(!regexRut.test(rut)){
        alert("Formato de RUT inválido");
        return;
    }



});
