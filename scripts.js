let cliques = localStorage.getItem("cliques") || 0;

cliques = Number(cliques);

document.getElementById("contador").innerText = "Cliques: " + cliques;

document.addEventListener("click", function() {
  cliques++;

  localStorage.setItem("cliques", cliques);

  document.getElementById("contador").innerText = "Cliques: " + cliques;
});