# Aula01 - Testes de Software
## 1. Introdução
### 1.1. O que é um teste de software?
- Teste de software é um processo de execução de um programa com o objetivo de encontrar erros.
- O teste é uma atividade de execução de um sistema com o objetivo de encontrar falhas.

## Erro x Falha
- Erro: é a diferença entre o valor calculado e o valor correto.
- Falha: é a manifestação do erro durante a execução do programa.

## Falha e Defeito
- Falha: é a manifestação do erro durante a execução do programa.
- Defeito: é o erro no código fonte que causa a falha.

## Eficiênvia e Eficácia
- Eficiência / Precisão: O qual próximo da perfeição, detalhe um requisito é bem sucedido
- Eficácia / Acurácia: O quão próximo do alvo / Objetivo

### Falha x Defeito segundo o ISTQB
- Falha: é a **incapacidade** de um sistema ou componente de executar suas funções requeridas dentro de requisitos especificados.
    - Ex: normalmente quando há uma falha o sistema **não funciona**.
- Defeito: é um desvio do comportamento especificado de um sistema ou componente.
    - Ex: o sistema funciona, mas **não funciona como deveria**.

## 2. Tipos de Testes
### 2.1. Teste de Unidade
- Teste de unidade é o teste de menor nível, é o teste de um único componente ou unidade do sistema.
- O teste de unidade é realizado pelo desenvolvedor, que testa cada unidade de código assim que é desenvolvida.
- Ex: Testes que realizamos no nosso banco de dados, alimentando com dados e verificando se os dados estão sendo salvos corretamente (CRUD).

### 2.2. Teste de Integração
- Teste de integração é o teste de um conjunto de unidades de código.
- O teste de integração é realizado pelo desenvolvedor, que testa o conjunto de unidades de código assim que são desenvolvidas.
- Ex: Utilizando a ferramenta Insomnia para testar as rotas da nossa aplicação.

### 2.3. Teste de Sistema (Ponto a Ponto)
- Teste de sistema é o teste de todo o sistema.
- O teste de sistema é realizado pelo desenvolvedor, que testa o sistema assim que é desenvolvido.

### 2.4. Teste de Aceitação
- Teste de aceitação é o teste realizado pelo usuário final, que testa o sistema assim que é desenvolvido.

## 3. Teste de Caixa Preta
- Teste de caixa preta é o teste realizado sem conhecer a implementação interna do sistema.

## 4. Teste de Caixa Branca
- Teste de caixa branca é o teste realizado conhecendo a implementação interna do sistema.

## Tipos de teste de software
- **Funcional**
- **Recuperação de falhas**
- **Segurança**
- **Performance**
- **Carga**

## 5. Roteiro de Testes
- Roteiro de testes é um documento que descreve os testes a serem realizados em um sistema. Normalmente no formato de tabela ou checklist.

## 6. Relatório de Testes
- Relatório de testes é um documento que descreve os resultados dos testes realizados em um sistema

## 7. Atividade Prática (Testando a API de Pedidos)
**[Neste repositório](https://github.com/wellifabio/pedidosapi-2025.git)**, você encontrará uma API de pedidos que desenvolvemos nas aulas de projetos anteriores. Sua tarefa é testar essa API utilizando os conceitos aprendidos nesta aula. Será um teste do tipo caixa branca, pois já conhecemos a implementação interna do sistema. Execute o projeto em seu computador e siga o roteiro de testes sugerido:

---
### Roteiro de Testes - Caixa Branca
Como já conhecemos o sitema, e ainda não está completo, possui somente a API realizaremos o teste manual de caixa branca
#### Requisitos Funcionais
- Gestão de usuários
    - Usuário tipo CLIENTE pode se cadastrar
    - Usuário tipo ADMIN é cadastrado por outro ADMIN
    - Somente usuários **Logados** podem listar ou alterar outros usuários
- Gestão de Produtos
    - O endpoint de listar produtos não precisa estar **logado** para funcionar
    - Nos outros endpoints, o usuário precisa estar **logado** para funcionar
- Gestão de Pedidos
    - Todos os endpoints, o usuário precisa estar **logado** para funcionar
#### Requisitos não funcionais
- Frameworks
    - Jode.JS
    - Prisma
    - JWT
    - Swagger
- Linguagens de programação
    - JavaScript
- Ambiente Dev e QA implantado localmente em 127.0.0.1:3001 / localhost:3001

#### Check-list
- 1 **Teste de Unidade**: A partir da página de documentação da API swagger, verifique todas as rotas estão funcionando corretamente, através do checklist, classifique cada teste como (Funcional, Segurança ou Recuperação de Falhas) conforme exemplo dos primeiros testes nos endpoints de usuários:
    - **Usuários**:
    - [ ] Rota de Login de usuário
        - [ ] Credenciais corretas retornaram um token JWT (Segurança)
        - [ ] Credenciais incorretas retornaram erro 400 (Recuperação de falhas)
    - [ ] Rota de criação de usuário
        - [ ] Usuário criado com sucesso (Código 201) (Funcional)
        - [ ] Usuário co e-mail já existente retornou erro 400 (Recuperação de falhas)
        - [ ] A rota está protegida por autenticação JWT (Segurança)
        - [ ] A rota deveria estar protegida por autenticação JWT (Funcional, Segurança)
    - [ ] Rota de listagem de usuários
        - [ ] Listagem de usuários retornou sucesso (Funcional)
        - [ ] A rota está protegida por autenticação JWT (Segurança)
        - [ ] Listagem de usuários vazia retornou sucesso (Funcional)
    - [ ] Rota de atualização de usuário
        - [ ] Usuário atualizado com sucesso (Código 202)
        - [ ] Usuário não encontrado retornou erro 404
        - [ ] A rota está protegida por autenticação JWT
    - [ ] Rota de exclusão de usuário
        - [ ] Usuário excluído com sucesso (Código 204)
        - [ ] Usuário não encontrado retornou erro 404
        - [ ] A rota está protegida por autenticação JWT
    - **Produtos**:
    - [ ] Rota de criação de produto
        - [ ] Produto criado com sucesso (Código 201)
        - [ ] A rota está protegida por autenticação JWT
    - [ ] Rota de listagem de produtos
        - [ ] Listagem de produtos retornou sucesso
        - [ ] A rota está protegida por autenticação JWT
        - [ ] Listagem de produtos vazia retornou sucesso
    - [ ] Rota de atualização de produto
        - [ ] Produto atualizado com sucesso (Código 202)
        - [ ] Produto não encontrado retornou erro 404
        - [ ] A rota está protegida por autenticação JWT
    - [ ] Rota de exclusão de produto
        - [ ] Produto excluído com sucesso (Código 204)
        - [ ] Produto não encontrado retornou erro 404
        - [ ] A rota está protegida por autenticação JWT
    - **Pedidos**:
    - [ ] Rota de criação de pedido
        - [ ] Pedido criado com sucesso (Código 201)
        - [ ] Pedido com produto não existente retornou erro 400
        - [ ] Pedido com usuário não existente retornou erro 400
        - [ ] A rota está protegida por autenticação JWT
    - [ ] Rota de listagem de pedidos
        - [ ] Listagem de pedidos retornou sucesso
        - [ ] A rota está protegida por autenticação JWT
    - [ ] Rota de atualização de pedido
        - [ ] Pedido atualizado com sucesso (Código 202)
        - [ ] Pedido alterado para produto não existente retornou erro 400
        - [ ] Pedido alterado para usuário não existente retornou erro 400
        - [ ] A rota está protegida por autenticação JWT
    - [ ] Rota de exclusão de pedido
        - [ ] Pedido excluído com sucesso (Código 204)
        - [ ] Pedido não encontrado retornou erro 404
        - [ ] A rota está protegida por autenticação JWT
    - **Exclusão de Usuarios e Produtos**:
        - [ ] Exclusão de usuário com pedidos cadastrados retorna erro 400
        - [ ] Exclusão de produto com pedidos cadastrados retorna erro 400
---

## Relatório de Testes
- Após realizar os testes, elabore um relatório de testes contendo os resultados dos testes realizados (Basta preencher o checklist acima com os resultados dos testes). O relatório deve conter:
    - Data e hora dos testes
    - Nome do testador
    - Versão da API testada
    - Resultados dos testes (conforme checklist acima)
    - Observações adicionais

## Entrega
- O relatório de testes deve ser enviado para [Formulário de Entrega](https://docs.google.com/forms/d/e/1FAIpQLSeI-2m-v70ULhXEE3mpTyv8H9-B4xiovM6rN5up-CkR8iGuIg/viewform?usp=dialog) em formato **PDF** com evidências de cada rota testada (prints de tela, abaixo de cada check-list do endpoint testado) até a próxima aula.