const canvas = document.getElementById('stadiumCanvas');
const ctx = canvas.getContext('2d');

// Lista de objetos en el estadio
const objects = [];

// Dibujar el campo de fútbol
function drawField() {
  ctx.fillStyle = 'green';
  ctx.fillRect(50, 50, 700, 500); // Campo de fútbol
}

// Dibujar todos los objetos
function drawObjects() {
  objects.forEach(obj => {
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
  });
}

// Agregar objeto al estadio
function addObject(type) {
  let newObject;
  
  if (type === 'stands') {
    newObject = { x: 100, y: 100, width: 200, height: 50, color: 'gray' }; // Grada
  } else if (type === 'light') {
    newObject = { x: 300, y: 200, width: 20, height: 60, color: 'yellow' }; // Torre de luz
  }
  
  objects.push(newObject);
  draw();
}

// Reiniciar el estadio
function resetStadium() {
  objects.length = 0;  // Limpiar objetos
  draw();
}

// Dibujar todo (campo + objetos)
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar canvas
  drawField();
  drawObjects();
}

// Eventos de botones
document.getElementById('addStands').addEventListener('click', () => {
  addObject('stands');
});

document.getElementById('addLight').addEventListener('click', () => {
  addObject('light');
});

document.getElementById('reset').addEventListener('click', resetStadium);

// Inicializar el campo
drawField();
