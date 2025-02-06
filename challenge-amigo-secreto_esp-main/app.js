let amigos = []; // Lista de amigos

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim();

    // Validar que el nombre no esté vacío y no contenga números
    if (nombreAmigo === "" || /\d/.test(nombreAmigo)) {
        alert("Por favor, ingrese un nombre válido sin números.");
        return;
    }

    amigos.push(nombreAmigo);

    // Agregar a la lista en HTML
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoAmigo);

    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    // Elegir un único "amigo secreto" de la lista
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar solo un resultado en el HTML
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; 

    const item = document.createElement("li");
    item.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultadoList.appendChild(item);
}
