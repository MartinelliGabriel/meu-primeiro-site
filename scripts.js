let cliques = 0;

document.addEventListener("click", function() {
  cliques++;

  document.getElementById("contador").innerText = "Cliques: " + cliques;

  // gera cor aleatória
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let cor = "rgb(" + r + "," + g + "," + b + ")";

  document.body.style.background = cor;
});