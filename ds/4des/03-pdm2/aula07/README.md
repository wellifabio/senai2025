# Aula07 - Expo + React Native
## App que envia dados para o whatsapp
### Ambiente
- Git (gitbash)
- VsCode
- Node.js
- Expo CLI
- React Native
### Objetivo
Criar um app de carrinho de compras que envie os dados do pedido para o whatsapp.
### Demonstração
- 1 Abra o **git-bash** em sua área de trabalho e dê os comandos a seguir para criar um novo projeto **React Native com Expo**: Certifique-se de ter o **Expo CLI** instalado. Se ainda não o fez, você pode instalá-lo com o seguinte comando:
```bash
npm install -g expo-cli
```
- 2 Crie um novo projeto React Native com o Expo, já na versão mais recente do Expo, acesse a pasta do projeto e abra o VsCode:
```bash
npx create-expo-app@latest appcartwhatsapp
cd appwhatsapp
npm run reset-project
code .
```
- Após abrir com o VsCode, abra um terminal CMD ou bash e execute o projeto com:
```bash
npx expo start
```
- Escolha onde prentende executar o app: no emulador Android, iOS ou no celular com o app Expo Go.

- Instale as dependências necessárias, a maioria já vem instalada por padrão com o Expo:
    - Vamos instalar o Async Storage para armazenar os dados do carrinho localmente:
```bash
npm install @react-native-async-storage/async-storage
```

- O expo router já vem instalado por padrão então vamos configurar as rotas do app:
    - Crie uma pasta chamada **app** na raiz do projeto.
    - Dentro da pasta **app**, crie um arquivo chamado **_layout.js** com o seguinte conteúdo:
```javascript
import { Stack } from "expo-router";
export default function Layout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: "Login" }} />
    <Stack.Screen name="screens/_layout" options={{ headerShown: false }} />
    </Stack>;
}
```
    - Crie um arquivo chamado **index.js** dentro da pasta **app** para a tela  de login e uma pasta chamada **screens** para as outras duas telas, uma que vai listar os **produtos** e outra para o **carrinho** de compras, estas duas vamos criar dentro da pasta **screens** e o seu layout será com abas.
    - A estrutura de pastas deve ficar assim:
```app
│   _layout.js
│   index.js
└───screens
    │   │   _layout.tsx
    │   │   index.js
    │   │   carrinho.js
```
- No arquivo **_layout.tsx** dentro da pasta **screens**, vamos configurar as abas:
```javascript
import { Tabs } from "expo-router";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Produtos" }} />
      <Tabs.Screen name="carrinho" options={{ title: "Carrinho" }} />
    </Tabs>
  );
} 
```
- O fluxo se navegação será: Tela de Login -> Tela de Produtos -> Tela de Carrinho.
- Na tela de produtos, crie uma lista de produtos com botões para adicionar ao carrinho.
- Na tela do carrinho, exiba os produtos adicionados e um botão para enviar o pedido para o WhatsApp.
- Para enviar a mensagem para o WhatsApp, você pode usar o seguinte código:
```javascript
import { Linking } from 'react-native';
const enviarParaWhatsApp = (mensagem) => {
  const url = `whatsapp://send?text=${encodeURIComponent(mensagem)}`;
  Linking.openURL(url).catch(() => {
    alert('Por favor, instale o WhatsApp para enviar a mensagem');
  });
};
``` 
- Teste o aplicativo no emulador ou dispositivo físico para garantir que tudo esteja funcionando conforme o esperado.
### Conclusão
Com isso, você terá um aplicativo básico de carrinho de compras que envia os dados do pedido para o WhatsApp usando React Native e Expo. Você pode expandir esse projeto adicionando mais funcionalidades, como autenticação de usuário, integração com uma API de produtos, entre outros.

### [Link do projeto completo de exemplo no GitHub](https://github.com/wellifabio/appcartwhatsapp2025.git)

O aplicativo de exemplo além de enviar os dados para o WhatsApp, também armazena os dados do carrinho localmente usando o Async Storage.
- Utiliza também o conceito de componentes para mensagem de alerta e para exibir os produtos em forma de cartão/modal.
- Também centraliza os estilos, cores e api na pasta **root** do projeto, para facilitar a manutenção do código.
- Ao listar os produtos e fazer login, o app busca os dados mockados em arquivos .json públicos hospedados no **GitHub**.
- Na tela de produtos, há uma funcionalidade de busca para filtrar os produtos por categoria e listas com rolagem horizontal e vertical.
- Na tela de carrinho, há a funcionalidade de remover itens do carrinho e calcular o total do pedido antes de enviar para o WhatsApp.
- Sinta-se à vontade para clonar o repositório e explorar o código para entender melhor como tudo foi implementado!

A **IA Copilot** foi utilizada para auxiliar na construção do código, mas todo o projeto foi revisado e adaptado para garantir que atenda aos requisitos específicos do aplicativo.