function pesquisar() {
    // Obtém a referência para a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // **Para fins de depuração, mostra a seção no console**
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    // então não mostre nada
    section.innerHTML = "<p>Busca vazia<p>"
    return
  }
  // deixando as palavras do campoPesquisa em minusculo 
  campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let aconteceu = "";
    let mudou = "";
    let tags = ""; 
     // Para cada dado na lista de dados, construir o HTML do resultado
    for (let dado of dados) {
      // deixando tudo em minuscuol
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLowerCase()
      aconteceu = dado.aconteceu.toLowerCase()
      mudou = dado.mudou.toLowerCase()
      tags = dado.tags.toLowerCase()
    
      // Se titulo ou a descrição ou oque aconteceu ou oq mudou ou as tags tem o campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)  || aconteceu.includes(campoPesquisa) || mudou.includes(campoPesquisa)|| tags.includes(campoPesquisa)) 
        {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <h3> O que aconteceu</h3>
        <p class="aconteceu-meta">${dado.aconteceu}</p>
        <h3> O que mudou na aviação</h3>
        <p class="mudou-meta">${dado.mudou} </br>
        <a href="${dado.link}" target="_blank">Veja mais sobre</a>
      </div>`;
       } 
    }
    // se resultados não exitir
    if (!resultados) {
      // então faça isso
      resultados = "<p>Nenhum acidente encontrado<p>"
  
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
        }
     
    
  
