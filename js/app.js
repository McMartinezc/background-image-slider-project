const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

// Índice de la imagen actual
let currentImageIndex = 0; 

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const container = document.querySelector(".img-container");

btnLeft.addEventListener("click", () => {
  currentImageIndex--; //Restamos posición al indice
  console.log(currentImageIndex);

  //Verificamos que el indice es negativo, si lo es igualamos el indece negativo al ultimo elemento del array
  if (currentImageIndex < 0) {
    currentImageIndex = pictures.length - 1;
  }
  const imgName = pictures[currentImageIndex];
  const imgUrl = `../img/${imgName}.jpeg`;
  container.style.backgroundImage = `url(${imgUrl})`;
});

btnRight.addEventListener("click", () => {
  currentImageIndex++; // Mueve el índice a la derecha
  console.log(currentImageIndex);
  
  //Si nos salimos del array, tendremos que volver a 0
  if (currentImageIndex >= pictures.length) {
    currentImageIndex = 0;
  }

  const imgName = pictures[currentImageIndex];
  const imgUrl = `../img/${imgName}.jpeg`;
  container.style.backgroundImage = `url(${imgUrl})`;
});
