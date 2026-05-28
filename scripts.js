let cliques = 0;

function clicarBotao() {
  cliques++;

  document.getElementById("contador").innerText = "Cliques: " + cliques;

  if (cliques < 5) {
    document.getElementById("texto").innerText = "Tá começando 😄";
    document.body.style.background = "#0d0d0d";
  } 
  else if (cliques < 10) {
    document.getElementById("texto").innerText = "Tá evoluindo 😎";
    document.body.style.background = "#003322";
  } 
  else {
    document.getElementById("texto").innerText = "NÍVEL MÁXIMO 🔥";
    document.body.style.background = "#00ff88";
  }
}