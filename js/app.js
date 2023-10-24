const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

// buena suerte
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const container = document.querySelector(".img-container");

container.addEventListener("click", (event)=>{
  console.log(event.currentTarget)
  if(event.target.classList.contains("btn-left")){
    console.log("izquierda")
  }else if(event.target.classList.contains("btn-right")){
    console.log("derecha")
  }

  
})
