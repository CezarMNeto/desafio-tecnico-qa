# language: pt
@api
Funcionalidade: Validação da API Trello
  Como um consumidor da API
  Eu quero validar a resposta de um endpoint específico
  Para garantir sua integridade e disponibilidade

  @ValidarAcaoTrello
  Cenário: Validar o nome da lista de uma ação
    Quando eu enviar uma requisição GET para o endpoint de ações do Trello
    Então o status code da resposta deve ser 200
    E o campo "name" dentro de "list" no corpo da resposta deve ser "Professional"