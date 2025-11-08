const carrosLista = document.getElementById('carros-lista');

function criarCard(carro) {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('aria-label', `Carro ${carro.nome}, ano ${carro.ano}, preço ${carro.preco}`);
  card.innerHTML = `
    <img src="${carro.imagens?.['foto-inicio'] || '../assets/imgs/default-car.jpg'}" 
         alt="${carro.nome || 'Carro'}" 
         loading="lazy">
    <div class="card-title">
      <h2 class="font-league-24-bold neutro-8">${carro.nome}</h2>
    </div>
    <div class="card-description">
      <h4 class="font-league-14-light neutro-6">${carro.descricao}</h4>
    </div>
    <div class="card-topics">
      <div class="topic">
        <img src="../assets/imgs/Calendar.svg" alt="Ano do carro">
        <h5 class="font-league-12 neutro-9">${carro.ano}</h5>
      </div>
      <div class="topic">
        <img src="../assets/imgs/Value.svg" alt="Preço do carro">
        <h5 class="font-league-12 neutro-9">${carro.preco}</h5>
      </div>
    </div>
    <div class="card-buttons">
      <a href="carro.html?id=${carro.id}" class="font-league-12 neutro-6">Ver Mais</a>
      <a href="${carro.link}" class="font-league-12 neutro-0" target="_blank">Comprar</a>
    </div>
  `;
  return card;
}

async function carregarCarros() {
  try {
    carrosLista.innerHTML = '<p class="font-league-16 neutro-5">Carregando carros...</p>';

    const response = await fetch('../dados/Carros.json');
    const carros = await response.json();

    const fragment = document.createDocumentFragment();
    carros.forEach(carro => fragment.appendChild(criarCard(carro)));
    carros.forEach(carro => fragment.appendChild(criarCard(carro))); // opcional para looping

    carrosLista.innerHTML = '';
    carrosLista.appendChild(fragment);

  } catch (error) {
    carrosLista.innerHTML = '<p class="erro">Erro ao carregar os carros.</p>';
    console.error('Erro ao carregar os carros:', error);
  }
}

carregarCarros();
