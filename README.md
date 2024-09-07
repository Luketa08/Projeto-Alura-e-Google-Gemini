## Projeto: Busca de Acidentes Aéreos

### Descrição
Este projeto web permite pesquisar por acidentes aéreos históricos que marcaram a evolução da segurança da aviação. Ao inserir uma palavra-chave, o usuário encontra informações detalhadas sobre o acidente, como data, causa, consequências e medidas de segurança implementadas.

### Tecnologias Utilizadas
* **Frontend:**
  * HTML: Estrutura da página.
  * CSS: Estilização visual.
  * JavaScript: Lógica da aplicação, manipulação do DOM e interação com o usuário.
* **Backend:**
  * Dados estáticos: Os dados dos acidentes são armazenados em um arquivo JavaScript (dados.js).

### Como funciona
1. **Interface do usuário:** O usuário interage com a página através de um campo de pesquisa e um botão.
2. **Processamento da pesquisa:** Ao clicar no botão, o JavaScript coleta a palavra-chave digitada pelo usuário e inicia a busca nos dados.
3. **Exibição dos resultados:** Os resultados da pesquisa são apresentados em uma seção específica da página, com informações detalhadas sobre cada acidente encontrado. A busca é realizada comparando a palavra-chave com os campos "título", "descrição", "aconteceu", "mudou" e "tags" de cada objeto no conjunto de dados.

### Estrutura dos arquivos
* **index.html:** Contém a estrutura HTML da página, incluindo o cabeçalho, o corpo e o rodapé.
* **style.css:** Define as regras de estilo da página, como cores, fontes e layout.
* **app.js:** Contém a lógica JavaScript da aplicação, incluindo a função de pesquisa e a atualização da interface.
* **dados.js:** Armazena os dados dos acidentes em formato JSON, com cada acidente representado por um objeto com as propriedades "titulo", "descricao", "aconteceu", "mudou", "tags" e "link".


### Próximos passos
* **Melhorias na interface do usuário:** Implementar um design mais moderno e intuitivo.
* **Integração com APIs:** Buscar dados de acidentes em APIs públicas para ampliar o banco de dados.
* **Funcionalidades adicionais:** Implementar filtros, ordenação e outras funcionalidades para refinar a pesquisa.
* **Teste unitário:** Criar testes unitários para garantir a qualidade do código.

### Autores
* **Seu nome:** Lucca Ferraz
* **Seu email:** lucca.ferraz.lf@gmail.com

**Agradecimentos:**
Agradeço à Alura e ao Google Gemini pela oportunidade de aprender e desenvolver este projeto.

**Palavras-chave:** HTML, CSS, JavaScript, DOM, pesquisa, acidentes aéreos, segurança da aviação, desenvolvimento web

**#html #css #javascript #webdev #aviation #safety**


