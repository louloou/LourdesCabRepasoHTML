document.getElementById('miBoton').addEventListener('click', function() {
    var parrafo = document.getElementById('miParrafo');
    var colores = ['red', 'blue', 'green', 'purple', 'orange']; 
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; 
    parrafo.style.color = colorAleatorio; 
});

let elemento = document.querySelector('p')
elemento.textContent = "Noquis"
elemento.style.color = white 
elemento.backgroundColor = 'Red'