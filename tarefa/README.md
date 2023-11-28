#Exercício Módulo 09
___
### Task: Criar uma aplicação de lista de tarefas

#### Abstração:
* [X] 1. Criar arquivo HTML
    * [X] 1.1 Criar Header com o título da aplicação("Lista de Tarefas")  
    * [X] 2.1. Programar body:  
        * [X] 2.1.1. Header;
        * [X] 2.1.2. Body:
            * [X] 2.1.2.1. Formulário:
                * [X] Input text
                * [X] Button(type submit)
            * [X] 2.1.2.2. Lista de tarefas com lista não ordenada
* [X] 2. Criar arquivo CSS:
    * [X] 2.1. Visual com CSS:
        * [X] 2.1.1. Melhorar visual cabeçalho centralizando na página
        * [X] 2.1.2. Melhorar visual do Formulário
        * [X] 2.1.3. Melhorar visual da lista de tarefas tabeladas
* [X] 3. Criar arquivo JS:
    * [X] 3.1. Trazer biblioteca jquery
    * [X] 3.2. Programar evento de submit do botão para adicionar nova tarefa à lista
    * [X] 3.3. Atualiza lista
    * [X] 3.4. Clicar sobre a tarefa tornar ela realizada ou não

>[!NOTE]
>Usei o código abaixo para achar o id do atributo diretamente no js(jquery) e isso
>possibilitou que ao clicar sobre a tarefa específica somente ele seria sublinhada como
>concluida.Porém, o event foi desprezado pela pacote, ou seja, já não é mais usual.
>Infelizmente, não encontrei até o momento outra forma de limpar o código. Tentei usar o
>"this" no lugar de event porém fracassei.

**Aceito sugestões para essa limpeza de código!**

>[!IMPORTANT]
>O arrayTask serviu para fazer com que adiciona-se sempre IDs diferentes. Se futuramente o
>código fosse para um banco de dados onde seria carregado as informações bastaria passar o
>array em questão com todas as tarefas que a pessoa digitou.