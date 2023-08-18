const articles = document.querySelectorAll('.noticia');

articles.forEach(article => {
  article.addEventListener('click', () => {
    const articleId = article.id;
    window.location.href = `noticias.html?id=${articleId}`;
  });
});

const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
function getArticleData(articleId) {
  if (articleId === 'noticia1') {
    return {
      title: 'Team Leaders da CT',
      img: './assets/img/cheers.png',
      content: 'A ETEC CT, dessa vez estava mais preparada que nunca para o evento e deu pra ver claramente na performance não só dos atletas, mas também da torcida, pois agora tivemos torcida de fato.'
    };
  } else if (articleId === 'noticia2') {
    return {
      title: 'Eleições da ETEC CT',
      img: './assets/img/debate.png',
      content: 'Na ETEC CT, tivemos o primeiro debate de chapas do grêmio durante o período da SPF. Destaque para a chapa da Politeia que tomou a frente afrontando e destacando diversos pontos relevantes que acabou dando a eles a vitória no debate'
    };
  } else if (articleId === 'noticia3') {
    return {
      title: 'Possível última SPF?',
      img: './assets/img/spf.png',
      content: 'A SPF, que costuma reunir apresentações de talentos, painéis e competições de sósias, tem sido alvo de grandes rivalidades e conflitos entre as salas. No último evento, que ocorreu na última semana, a rivalidade entre as turmas atingiu níveis alarmantes, com tumultos, gritaria e até mesmo troca de ofensas entre os alunos. O clima de competição e disputa de prêmios acabou gerando um ambiente hostil e desrespeitoso, o que preocupa a direção da ETEC CT. Diante desses acontecimentos, a direção está reavaliando a continuidade da SPF e considerando alternativas que promovam uma convivência mais saudável entre os estudantes. Uma das propostas em discussão é substituir as apresentações por palestras e atividades que estimulem a reflexão e a troca de conhecimentos.'
    };
  }
}

const articleData = getArticleData(articleId);


document.querySelector('.article-title').textContent = articleData.title;
document.querySelector('.article-img').src = articleData.img;
document.querySelector('.article-content').textContent = articleData.content;

