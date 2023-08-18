document.addEventListener("DOMContentLoaded", function() {
  const modoEscuroToggle = document.getElementById("modoEscuroToggle");
  const body = document.body;
  const cabecalhoNav = document.querySelector('.cabecalho');
  const conteudoMain = document.querySelector('.conteudo');
  const TeamCont = document.querySelector('.team-container');
  const texts = document.querySelectorAll('h1, h2, h3, p, a');
  const rodapeFooter = document.querySelector('#footer');

  modoEscuroToggle.addEventListener("click", function() {
    body.classList.toggle("modo-escuro2");
    cabecalhoNav.classList.toggle('modo-escuro');
    conteudoMain.classList.toggle('modo-escuro2');
    rodapeFooter.classList.toggle('modo-escuro');

    texts.forEach(text => text.classList.toggle('modo-claro'));
  });
});