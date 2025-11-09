const params = new URLSearchParams(window.location.search);
const idCarro = params.get('id');

fetch('../dados/Carros.json')
  .then(res => res.json())
  .then(carros => {
    const carro = carros.find(c => c.id == idCarro);

    if (carro) {
      const container = document.getElementById('carro-detalhe');

      container.innerHTML = `
        <div class="galeria-container">
          <div class="imagem-destaque">
            <img id="imagemPrincipal" src="" alt="${carro.nome}" width="570px" height="650px" loading="lazy">
          </div>
          <div class="miniaturas" id="miniaturasContainer"></div>
        </div>
        <div class="informacoes-container">
          <h1 class="font-league-48-bold neutro-0">${carro.nome}</h1>
          <h4 class="font-league-18-medium neutro-6">${carro.descricao}</h4>
          <div class="informacoes-topicos">
            <div class="topico">
              <img src="../assets/imgs/Calendar.svg" alt="" height="22px" width="22px">
              <p class="font-league-16-medium neutro-6">${carro.ano}</p>
            </div>
            <div class="topico">
              <img src="../assets/imgs/Value.svg" alt="" height="22px" width="22px">
              <p class="font-league-16-medium neutro-6">${carro.preco}</p>
            </div>
            <div class="topico">
              <img src="../assets/Icons/Engine.svg" alt="" height="22px" width="22px">
              <p class="font-league-16-medium neutro-6">${carro.cilindrada}</p>
            </div>
            <div class="topico">
              <img src="../assets/Icons/Combustivel.svg" alt="" height="22px" width="22px">
              <p class="font-league-16-medium neutro-6">${carro.combustivel}</p>
            </div>
          </div>
          <a href="${carro.link}" class="button-comprar font-league-16-medium neutro-5" target="_blank">Quero Comprar!</a>
        </div>
      `;

      const miniaturasContainer = document.getElementById('miniaturasContainer');
      const todasImagens = carro.imagens.galeria;
      document.getElementById("imagemPrincipal").src = todasImagens[0];


      todasImagens.forEach((imgSrc, index) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        if (index === 0) img.classList.add("active");
        img.addEventListener("click", () => {
          imagemPrincipal.src = imgSrc;
          document.querySelectorAll(".miniaturas img").forEach(m => m.classList.remove("active"));
          img.classList.add("active");
        });
        miniaturasContainer.appendChild(img);
      });

    } else {
      document.getElementById('carro-detalhe').innerHTML = `<p>Carro não encontrado.</p>`;
    }
  });
