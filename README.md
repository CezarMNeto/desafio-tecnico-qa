# Desafio de Automação de Testes QA

Este projeto contém a solução para o desafio técnico de automação de testes, abrangendo testes de interface web e de API, utilizando Cypress e Cucumber.

## 📝 Descrição

O objetivo foi criar um framework de automação robusto e escalável para validar funcionalidades críticas de um e-commerce e de um endpoint de API, seguindo as melhores práticas de mercado.

## ✨ Tecnologias Utilizadas

- **Framework de Teste:** Cypress
- **Linguagem:** JavaScript
- **BDD (Behavior-Driven Development):** Cucumber
- **Gerenciador de Pacotes:** NPM

## 🚀 Decisões de Arquitetura

Para garantir a qualidade, manutenibilidade e escalabilidade do projeto, as seguintes decisões foram tomadas:

1.  **Page Object Model (POM):** Para o desafio Web, foi utilizado o padrão POM. As interações com as páginas foram abstraídas em classes (`LoginPage`, `HomePage`, etc.), desacoplando a lógica de teste da UI. Isso torna os testes mais limpos e resistentes a pequenas mudanças na interface.
2.  **BDD com Cucumber:** Os cenários foram escritos em Gherkin (`.feature`), descrevendo o comportamento do usuário de forma clara e não-técnica. Isso melhora a comunicação entre desenvolvedores, QAs e stakeholders.
3.  **API Service Layer:** A requisição para a API do Trello foi encapsulada em uma classe de serviço (`TrelloAPIService`). Esta abordagem centraliza a lógica de comunicação com a API, facilitando a reutilização e a manutenção caso novos endpoints sejam adicionados.
4.  **Data-Driven Testing:** Dados sensíveis e variáveis, como credenciais de login, foram externalizados para um arquivo em `cypress/fixtures/users.json`. Isso evita dados "hardcoded" e facilita a execução dos testes com diferentes massas de dados.

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [NPM](https://www.npmjs.com/) (geralmente instalado com o Node.js)

## 📦 Instalação

1.  Clone este repositório para a sua máquina local:

    ```bash
    git clone https://github.com/CezarMNeto/desafio-tecnico-qa
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd desafio-tecnico-qa
    ```

3.  Instale todas as dependências do projeto:
    ```bash
    npm install
    ```

## ⚡ Execução dos Testes

Você pode executar os testes de duas maneiras:

1.  **Modo Interativo (Recomendado para desenvolvimento):**

    - Abre a interface do Cypress, onde você pode ver os testes executando passo a passo.

    ```bash
    npm run cy:open
    ```

2.  **Modo Headless (Para execução em terminal ou CI/CD):**
    - Executa todos os testes em segundo plano e exibe os resultados no terminal.
    ```bash
    npm test
    ```

## 📬 Contato

📱 (11)-94944-7731
📧 cezarmartins84@gmail.com
