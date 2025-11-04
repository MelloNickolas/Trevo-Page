const carrosLista = document.getElementById('lista-carros');

function criarCard(carro) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${carro.imagens['foto-inicio']}" alt="${carro.nome}">
    <div class="card-title">
      <h2 class="font-league-24-bold neutro-8">${carro.nome}</h2>
    </div>
    <div class="card-description">
      <h4 class="font-league-14-light neutro-6">${carro.descricao}</h4>
    </div>
    <div class="card-topics">
      <div class="topic">
        <img src="../assets/imgs/Calendar.svg">
        <h5 class="font-league-12 neutro-9">${carro.ano}</h5>
      </div>
      <div class="topic">
        <img src="../assets/imgs/Value.svg" >
        <h5 class="font-league-12 neutro-9">${carro.preco}</h5>
      </div>
    </div>
    <div class="card-buttons">
      <a href="carro.html?id=${carro.id}" class="font-league-12 neutro-6">Ver Mais</a>
      <a href="${carro.link}" class="font-league-12 neutro-0">Comprar</a>
    </div>
  `;
  return card;
}

fetch('../dados/Carros.json')
  .then(response => response.json())
  .then(carros => {
    // Cria os cards
    carros.forEach(carro => carrosLista.appendChild(criarCard(carro)));
  })
  .catch(error => console.error('Erro ao carregar os carros:', error));
