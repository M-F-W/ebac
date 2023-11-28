# Projeto 2 - EBAC

## Task: Criar uma aplicação de agenda de contatos

1. [X]: Contruir um formulário contendo Nomes e Telefones
2. [X]: Criar um botão de cadastro de novo contatos
3. [X]: Criar tabela
4. [X]: Programar funcionalidade do botão de cadastro
5. [X]: Ajustar visual da página
6. [X]: Criar repositório no github para o projeto
7. [ ]: Fazer deploy da aplicação no Vercel
8. [ ]: Entrega do projeto pela plataforma da EBAC


## Soluções
___
***A solução que achei para a entrada de dados no input de telefone foi usar REGEX na
propriedade pattern:***
```html
<input id="inputNumero" type="tel" placeholder="telefone"
                pattern="^([0-9]{2})[0-9]{8,9}$" required>
```

comments: 25/08/2023
