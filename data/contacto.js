const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letras y Espacios, pueden llevar acento
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ //de 7 a 14 números
}


const formulario = document.getElementById('form_contacto');

const inputs = document.querySelectorAll(' #form_contacto input');

const campos = {
    nombre : false,
    apellido : false,
    email : false,
    telefono : false
}


const validarCampo =(expresion, input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`form_control_${campo}`).classList.remove('form_control_incorrecto')
        document.getElementById(`form_control_${campo}`).classList.add('form_control_correcto')
        document.querySelector(`#form_control_${campo} .formulario_input_error`).classList.remove('formulario_input_error_activo')
        campos[campo] = true;
    }else{
        document.getElementById(`form_control_${campo}`).classList.add('form_control_incorrecto')
        document.getElementById(`form_control_${campo}`).classList.remove('form_control_correcto')
        document.querySelector(`#form_control_${campo} .formulario_input_error`).classList.add('formulario_input_error_activo')
        campos[campo] = false;
    }
}

const validarFormulario=(e)=>{
    switch(e.target.name){
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre')
        break

        case 'apellido':
            validarCampo(expresiones.apellido, e.target, 'apellido')
        break

        case 'email':
            validarCampo(expresiones.email, e.target, 'email')
        break

        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono')
        break
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if(campos.nombre && campos.apellido && campos.telefono && campos.email && terminos.checked){
        formulario.reset();
        document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_activo'); 
        setTimeout(()=>{
            document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito_activo'); 
        }, 5000)

        document.querySelectorAll('.form_control_correcto').forEach((icono) =>{
            icono.classList.remove('form_control_correcto');
        })
    } else{
        document.getElementById('form_control_error').classList.add('form_control_error_activo');
    }
})
