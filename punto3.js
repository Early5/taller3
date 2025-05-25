function sistemaBiblioteca() {
    let continuar = true;
    
    while (continuar) {
        // Solicitar tipo de usuario
        let tipoUsuario = prompt("Ingrese tipo de usuario (estudiante, docente, visitante):").toLowerCase();
        
        // Validar tipo de usuario
        while (tipoUsuario !== "estudiante" && tipoUsuario !== "docente" && tipoUsuario !== "visitante") {
            tipoUsuario = prompt("Tipo no válido. Ingrese estudiante, docente o visitante:").toLowerCase();
        }
        
        // Solicitar cantidad de libros
        let cantidad = parseInt(prompt("Ingrese cantidad de libros:"));
        
        // Validar cantidad según tipo de usuario
        let limiteExcedido = false;
        let mensaje = "";
        
        switch (tipoUsuario) {
            case "estudiante":
                if (cantidad > 3) {
                    limiteExcedido = true;
                    mensaje = "Estudiante: Límite excedido (máximo 3 libros)";
                }
                break;
            case "docente":
                if (cantidad > 5) {
                    limiteExcedido = true;
                    mensaje = "Docente: Límite excedido (máximo 5 libros)";
                }
                break;
            case "visitante":
                if (cantidad > 1) {
                    limiteExcedido = true;
                    mensaje = "Visitante: Límite excedido (máximo 1 libro)";
                }
                break;
        }
        
        if (limiteExcedido) {
            alert(mensaje);
        } else {
            alert("Préstamo registrado exitosamente");
        }
        
        // Preguntar si desea continuar
        let respuesta = prompt("¿Desea registrar otro préstamo? (si/no)").toLowerCase();
        continuar = respuesta === "si";
    }
    
    alert("Sistema de préstamos finalizado");
}

// Iniciar el sistema
sistemaBiblioteca();




