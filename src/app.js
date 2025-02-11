import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const palos = ["♥", "♦", "♣", "♠"];

  function generateCard() {
      const randomValor = valores[Math.floor(Math.random() * valores.length)];
      const randomPalo = palos[Math.floor(Math.random() * palos.length)];

      document.getElementById("valor").textContent = randomValor;
      document.getElementById("palo1").textContent = randomPalo;
      document.getElementById("palo2").textContent = randomPalo;

      // Para cambiar el color del palo a rojo en corazones o diamantes
      if (randomPalo === "♥" || randomPalo === "♦") {
          document.getElementById("palo1").style.color = "red";
          document.getElementById("palo2").style.color = "red";
      } else {
          document.getElementById("palo1").style.color = "black";
          document.getElementById("palo2").style.color = "black";
      }
      // modifica el ancho y largo de la carta
      const width = document.getElementById("width").value;
      const height = document.getElementById("height").value;

      document.getElementById("card").style.width = width + "px";
document.getElementById("card").style.height = height + "px";

    }

  generateCard(); // Generar la carta al cargar la página
  
  // cambiar carta cada 10 segundos
  document.getElementById("nuevo-carta").addEventListener("click", generateCard);
  setInterval(generateCard, 10000);


};
