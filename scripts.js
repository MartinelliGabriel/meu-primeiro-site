let cliques = 0;

function clicarBotao() {
  cliques = cliques + 1;

  document.getElementById("contador").innerText = "Cliques: " + cliques;

  if (cliques < 5) {
    document.getElementById("texto").innerText = "Tá começando 😄";
  } else if (cliques < 10) {
    document.getElementById("texto").innerText = "Já tá pegando o jeito 😎";
  } else {
    document.getElementById("texto").innerText = "VICIADO EM CLICAR 😂🔥";
  }
}