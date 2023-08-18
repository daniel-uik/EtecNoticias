document.addEventListener("DOMContentLoaded", function() {
  const modoEscuroToggle = document.getElementById("modoEscuroToggle");
  const body = document.body;
  const cabecalhoNav = document.querySelector('.cabecalho');
  const conteudoMain = document.querySelector('.conteudo');
  const conteudoMain1 = document.querySelector('.conteudo1');
  const texts = document.querySelectorAll('h1, h2, h3, p, a');
  const rodapeFooter = document.querySelector('#footer');
  const title = document.querySelector('.article-title');

  modoEscuroToggle.addEventListener("click", function() {
    body.classList.toggle("modo-escuro2");
    cabecalhoNav.classList.toggle('modo-escuro');
    conteudoMain.classList.toggle('modo-escuro2');
    conteudoMain1.classList.toggle('modo-escuro2');
    rodapeFooter.classList.toggle('modo-escuro');

    texts.forEach(text => text.classList.toggle('modo-claro'));
  });
});