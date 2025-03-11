# Aula02

- Concluindo um projeto FullStack Agendamento de consultas em uma clínica.
- [Repositório do projeto](https://github.com/wellifabio/clinica-seduc.git)
- Github fork (Clonar um repositório e alterar)

## Demonstração
- 1 Acesse o seu github e faça login
- 2 Navegue até o repositório que vai realizar o **fork**
- 3 Clique em fork para clonar remotamente o repositório
- 4 Após executar o FORK basta clonar o repositório, fazer as alterações necessárias e fazer commit
```bash
git clone https://github.com/wellifabio/clinica-seduc.git
```
- Abrir com o **VsCode** fazer as alterações e commitar.
- Na primeira vez que executa comit faça pelo **git bash** com os comandos
```bash
git add .
git commit -m "descrição da alteração"
```
- Vai apresentar erro de identificação, para corrigir
```bash
git config --global user.name "seulogin"
git config --global user.email "seuemail@dogit"
```
- E por último
```bash
git push
```
- A janela de autenticação vai aparecer e clique no botão para autenticar pelo navegador.
- A partir de agora as alterações que fizer podem ser atualizadas com commit direto no **VsCode**

## Atividade
No [Projeto de exemplo - Consultas na Clinica](https://github.com/wellifabio/clinica-seduc.git) acrescente as funcionalidades de **delete e update** tanto no back-end quanto no front-end.
- Ao concluir envie para seu git com commit diretamente pelo **VsCode**