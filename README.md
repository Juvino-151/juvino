# Cypress Teste Project Super Frete

Este projeto contém testes automatizados, referente ao site da empresa Super Frete, na
página de Calculos utilizando o Cypress para validar, o fluxo principal e o fluxo de mensagem de erro.
Para a melhor visualização dos fluxos validados, os separei em dois arquivos calculo.spec.cy.js onde se econtra o fluxo principal do cálculo.
E campostela.cy.js onde se econtra o fluxo das mensagens de erro.
## Estrutura do Projeto

- `cypress/`
  - `e2e/`: Contém os arquivos de testes.
  - `screenshots/`: Contém as arquivos .png capturados caso ocorra uma falha ao executar o scripts determinados.
  - `support/`: Contém comandos e configurações customizadas.
  - `support/`: Contém as arquivos .mp4 capturados ao executar o scripts determinados.
  - `node_modules/`: contém todas as dependências necessárias para o projeto, gerenciadas pelo npm ou yarn. Essas dependências incluem bibliotecas e módulos essenciais para o funcionamento e execução do código.
- `cypress.json`: Arquivo de configuração do Cypress.
- `package-lock.json`: Gestão de dependências do projeto.
- `package.json`: Gerenciamento de dependências do projeto.

## Pré-requisitos

- Node.js instalado (versão >= 12) - Instalação é efetuada diretamente pelo site,
 comandos para instalar no projeto: - node -v npm -v

- npm ou yarn instalado - npm install ou yarn install

- Cypress instalado - npm install cypress --save-dev

## Observações:

- Após efetuar as instalações necessárias e o projeto estiver pronto para ser iniciado, para maior agilidade, no `EXPLORADOR` no Select list `SCRIPT NPM`  contém
dois scripts o test onde é possível ao clicar, iniciar o comando:

- test - cypress run : Exibe no modo headless, ou seja, sem uma interface gráfica. Ao executa-lo o além do  relatorio dos resultados da automação, caso ocorra alguma falha  o cypress cria um arquivo png onde é possível visualizar na pasta Screenshots e um arquivo .mp4 com a performance de cada fluxo.

- cypress open : Exibe a interface gráfica do Cypress, permite que visualize e interaja com os testes de maneira interativa.

- npx cypress run (escolha seu navegador) video: Exibe no modo headless e com uma interface visual, além de gravar um arquivo .mp4 para os dois fluxos, que podem ser visualizados ao final da execução na pasta videos

**Importante**
- Por questões de versionamento ao executar ao executar o comando cypress open, seja linha de comando ou diretamente no script ao selecionar o navegador chrome a interface gráfica Cypress Test Runner não é exibida, mesmo após efetuar o tratamento de erros e atualizações de cahe, instalar e desinstalar o cypress e demais funcionalidades necessárias para o desempenho da automação. Por gentileza selecione os navegadores Electron ou Edge
- Mas ao executar os scripts cypress run e npx cypress run chrome video, localizados nos scripts npm, é possivel visualizar a automação no Chorme corretamente.

## Criar arquivo screenshots
- Altere por exemplo o resultado das mensagens de erro:
- No arquivo commands.js altere

        { value: '    ', shouldPass: false, message: 'CEP de origem é obrigatório' },

        para:

        { value: '    ', shouldPass: false, message: 'CEP de origem é obrigatóriggo' }, 

        Salve e inicie a automação do arquivo campostela.cy.js

 **Clone o repositório:**

1. **Obtenha a URL do Repositório**:
   - Vá para a página do repositório no GitHub.
   - Clique no botão verde "Code".
   - Copie a URL HTTPS ou SSH.

2. **Clone o Repositório**:
   - Abra o terminal.
   - Use o comando `git clone` seguido da URL copiada.

   Usando HTTPS:
  
   git clone https://github.com/Juvino-151/juvino.git