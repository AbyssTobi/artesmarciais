function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Se estiver vazio, exibe uma mensagem de "não encontrado"
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  // Inicializa uma string para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada arte marcial na lista
  for (let martialArt of artesMarciais) {
    // Converte os dados da arte marcial para minúsculas para facilitar a comparação
    nome = martialArt.nome.toLowerCase();
    nacao = martialArt.nacao.toLowerCase();
    descricao = martialArt.descricao.toLowerCase();
    tags = martialArt.tags.toLowerCase();

    // Verifica se o nome, nação, descrição ou tags da arte marcial contém a palavra pesquisada
    if (nome.includes(campoPesquisa) || nacao.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Se encontrar uma correspondência, adiciona a arte marcial aos resultados
      resultados += `
        <div class="item-resultado">
          <h3>${martialArt.nome} (${martialArt.nacao}): ${martialArt.titulo}</h3>
          <p class="descricao-meta">${martialArt.descricao}</p>
          <a href="${martialArt.link}" target="_blank"> Mais informações...</a>
        </div>
      `;
    }
  }

  // Se nenhum resultado foi encontrado, exibe uma mensagem
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa
  section.innerHTML = resultados;
}