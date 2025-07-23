# language: pt
@web
Funcionalidade: Jornada de Compra de Usuário
  Como um cliente da loja virtual
  Eu quero fazer login, buscar um produto, adicioná-lo ao carrinho
  E validar minha compra para garantir que a plataforma funcione corretamente

  @JornadaCompleta
  Cenário: Realizar uma compra com sucesso
    Dado que eu esteja na página de login
    Quando eu realizar o login com um usuário válido
    E eu buscar pelo produto "Men Tshirt"
    E eu adicionar o primeiro produto da busca ao carrinho
    Então eu devo visualizar o produto "Men Tshirt" na tela de pagamento