let amigos = []; // Array para almacenar los nombres de los amigos.

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim(); // Obtener el nombre ingresado y eliminar espacios extras.

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Añadir el nombre del amigo a la lista.
    amigos.push(nombreAmigo);

    // Actualizar la lista de amigos mostrada en el HTML.
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoAmigo);

    // Limpiar el campo de entrada.
    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    // Realizar el sorteo de amigos secretos
    let resultado = [];
    let amigosSorteados = [...amigos]; // Copiar el array para no modificar el original

    // Asegurarse de que no se asignen a sí mismos
    amigos.forEach((amigo, index) => {
        let amigoSecreto;
        do {
            amigoSecreto = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        } while (amigoSecreto === amigo);

        // Agregar la pareja de amigo y su amigo secreto
        resultado.push({ amigo, amigoSecreto });

        // Eliminar el amigo secreto asignado de la lista para que no se repita
        amigosSorteados = amigosSorteados.filter(a => a !== amigoSecreto);
    });

    // Mostrar los resultados en el HTML
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; // Limpiar resultados anteriores.

    resultado.forEach(({ amigo, amigoSecreto }) => {
        const item = document.createElement("li");
        item.textContent = `${amigo} tiene como amigo secreto a ${amigoSecreto}`;
        resultadoList.appendChild(item);
    });
}
