# Aula 06 - Escola
### Situação de aprendizagem desafiadora
### Objetivo
O objetivo desta aula é desenvolver um sistema **mobile** para controle de **turmas** e **atividades** de **professores**, baseado no SAEP 2023.1.

## Contextualização
Na educação a falta de organização relacionada às atividades desenvolvidas pelos professores durante as aulas pode ocasionar problemas de gestão dos conhecimentos já trabalhados e avaliados. É fundamental, para que se possa atingir os objetivos educacionais, que os professores tenham controle sobre as atividades que serão aplicadas às turmas.<br>Muitas escolas situadas em áreas remotas do Brasil não possuem um sistema para solucionar essa falta de organização, acarretando prejuízos aos estudantes, professores e ao processo educacional como um todo.

## Desafio
Você foi desafiado(a) a desenvolver um sistema **mobile** que permitirá ao professor se autenticar em um sistema para visualizar, registrar, excluir suas turmas, assim como registrar atividades para as suas turmas.

## Resultados e entregas esperadas
|Nº|Nome da entrega|Tipo de entrega|Tempo<br>estimado<br>(minutos)|
|-|-|:-:|:-:|
|1|Tela de autenticação de usuários (login)|Desenvolvimento do sistema|20|
|2|Tela principal do professor|Desenvolvimento do sistema|15|
|3|Cadastro de turma|Desenvolvimento do sistema|15|
|4|Listar turmas do professor|Desenvolvimento do sistema|20|
|5|Exclusão de turma|Desenvolvimento do sistema|20|
|6|Tela de atividades da turma|Desenvolvimento do sistema|15|
|7|Listar atividades da turma|Desenvolvimento do sistema|15|
|8|Cadastro de atividade para a turma|Desenvolvimento do sistema|15|
|9|Sair do sistema (logout)|Desenvolvimento do sistema|05|
|10|Commit em um repositório go github com README | README com as tecnologias utilizadas e screenshots das telas|05|

## Tecnologias sugeridas
- Expo
- React Native
- Api [RESTful Node.js neste repositório:](https://github.com/wellifabio/escola-shadcn-2025.git)

## Observações
- Ao utilizar a API RESTful Node.js sugerida, ao invés de utilizar o endereço `http://localhost:3000`, use o IP da sua máquina na rede local, por exemplo: `http://<SEU_IP_LOCAL>:3000`.
- Ou implante a API em um serviço de nuvem, como o [Vercel](https://www.vercel.com/), e utilize o endereço gerado.

### 1. Tela de autenticação de usuários (login)
Você deverá desenvolver uma tela de autenticação de usuários contendo um campo para informar o e-mail, um campo para informar a senha e um botão “entrar”. Essa deverá ser a tela principal que o usuário verá ao acessar o sistema.<br>O botão “entrar” deverá dar acesso a “tela principal do professor” caso o e-mail e senha informados sejam autenticados no banco de dados, criando então uma sessão. Caso o e-mail e senha não sejam autenticados, o usuário deverá ser redirecionado novamente à tela de autenticação. A imagem a seguir demonstra um exemplo do que deve ser desenvolvido nessa tela. O design do layout é de sua escolha, porém, deverá contemplar os elementos solicitados. (*Não é necessário autenticação JWT, somente redirecionamento*)
- ![Wireframe da tela de autenticação](./wireframe01.png)

### 2. Tela principal do professor
Você deverá desenvolver a tela principal do professor contendo os itens:
- Exibição do nome do professor autenticado no sistema
- Botão para sair do sistema
- Um botão para acesso ao “cadastro de turma”
- Listagem de turmas, contendo, os dados estáticos:
    - Número da turma
    - Nome da turma
    - Botão para excluir
    - Botão para visualizar
- A imagem (wireframe) a seguir representa um exemplo do que deve ser desenvolvido nessa tela. O design do layout é de sua escolha, porém, deverá contemplar os elementos solicitados.
- ![Wireframe da tela principal do professor](./wireframe02.png)

### 3. Cadastro de turma
Você deverá desenvolver uma tela contendo um campo, onde o usuário irá informar o nome da turma e um botão “cadastrar”. No banco de dados, deve ser registrada uma nova turma considerando o nome informado e o professor que cadastrou a turma. Uma turma pertence somente a um professor, porém, o
professor pode ter várias turmas.

### 4. Listar turmas do professor
Na tela principal do professor você deverá listar as turmas registradas no banco de dados que sejam pertencentes ao professor autenticado no sistema. A partir de cada turma listada, deve ser possível acessar a “exclusão de turmas” (botão excluir) e a “tela de atividades da turma” (botão visualizar).

### 5. Exclusão da turma
Na listagem das turmas na tela principal do professor você deverá adicionar ao botão “excluir” a funcionalidade de exclusão do banco de dados da turma selecionada.<br>Antes de excluir a turma do banco de dados, deverá ser apresentada uma tela de confirmação ao usuário, questionando se ele realmente quer excluir a turma.<br>Caso uma turma tenha atividades cadastradas para ela, essa turma não poderá ser excluída do banco de dados e a mensagem “Você não pode excluir uma turma com atividades cadastradas” deverá ser mostrada ao usuário e a ação não executada.

### 6. Tela de atividades da turma
Você deverá desenvolver a tela de atividades da turma contendo:
- Exibição do nome do professor autenticado no sistema
- Botão para sair do sistema
- Um botão para acesso ao “cadastrar atividade”
- Listagem de atividades, contendo os dados estáticos:
    - Número da atividade
    - Descrição da atividade
- A imagem (wireframe) a seguir representa um exemplo do que deve ser desenvolvido nessa tela. O design do layout é de sua escolha, porém, deverá contemplar os elementos solicitados.
- ![Wireframe da tela de atividades da turma](./wireframe03.png)
- Os dados apresentados podem ser estáticos, nesse momento, pois na entrega **7 listar atividades da turma**, será solicitada a listagem dinâmica de acordo com o banco de dados.

### 7. Listar atividades da turma
Na “tela de atividades da turma” você deverá listar as atividades registradas no banco de dados pelo professor da turma selecionada, mostrando o número da atividade e a descrição da atividade. Além disso, exibir o nome da turma.

### 8. Cadastro de atividade para a turma
Você deverá criar uma tela para o cadastro das atividades da turma, contendo um campo onde o usuário deverá informar a descrição da atividade. No banco de dados deverá ser registrada uma nova atividade considerando a descrição informada e a turma selecionada. Uma atividade pertence somente a uma turma, porém, a turma pode ter várias atividades.

### 9. Sair do sistema (logout)
Você deverá efetuar o logout do usuário que está autenticado, assim que ele clicar no botão **“sair”**, destruindo a sessão e redirecionando-o para a tela de autenticação de usuário (login).

### 10. Commit em um repositório go github com README
Você deverá desenvolver uma README com as tecnologias utilizadas e screenshots das telas desenvolvidas. O README deverá ser escrito no arquivo README.md do projeto, utilizando a linguagem Markdown.

## Entregas:
Você deverá efetuar as entregas nos seguinte formato:
- Um repositório público no GitHub chamado "escolamobile", contendo:
- O projeto desenvolvido com todas as entregas solicitadas.
- A README.md com as tecnologias utilizadas e **screenshots** das telas desenvolvidas.
- **[Formulário para colar o link do repositório](https://docs.google.com/forms/d/e/1FAIpQLSfYNlqYl3eilnYcNrs4l_MJK79Ud5NKcft-1qTqmV71ObaHuA/viewform?usp=publish-editor)**

|Nº|Nome da entrega|Pontos|Pontos obtidos|
|-|-|:-:|:-:|
|1|Tela de autenticação de usuários (login)|15||
|2|Tela principal do professor|15||
|3|Cadastro de turma|10||
|4|Listar turmas do professor|10||
|5|Exclusão de turma|10||
|6|Tela de atividades da turma|10||
|7|Listar atividades da turma|10||
|8|Cadastro de atividade para a turma|10||
|9|Sair do sistema (logout)|5||
|10|README com screenshots|5||
|**Total**||**100**|**0**|