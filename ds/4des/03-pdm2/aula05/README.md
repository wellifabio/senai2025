# Aula 05 - Gerando APK

## Objetivo
Nesta aula, você aprenderá a gerar o arquivo APK do seu aplicativo Android desenvolvido com React Native. O APK (Android Package) é o formato de arquivo usado para distribuir e instalar aplicativos Android. Ao final desta aula, você será capaz de criar um APK assinado, pronto para ser publicado na Google Play Store ou distribuído diretamente.

## Passos para Gerar o APK
1. **Instalar o Expo CLI**: Se você ainda não tem o Expo CLI instalado, você pode instalá-lo globalmente usando npm ou yarn:
```bash
npm install -g expo-cli
```
ou
```bash
yarn global add expo-cli
```
2. **Navegar até o diretório do projeto**: Abra o terminal e navegue até o diretório raiz do seu projeto React Native.
```bash
cd caminho/para/seu/projeto
```
3. **Configurar o app.json**: Certifique-se de que o arquivo `app.json` do seu projeto está corretamente configurado com as informações do aplicativo, como nome, slug, versão, etc.
```json
{
  "expo": {
     "name": "NomeDoSeuApp",
     "slug": "nome-do-seu-app",
     "version": "1.0.0",
     "android": {
        "package": "com.seunome.nomeapp"
     }
  }
}
 ```
4. **Gerar o APK**: Execute o comando abaixo para iniciar o processo de construção do APK:
```bash
    npx expo build:android
```
    Você será solicitado a escolher entre gerar um APK ou um App Bundle. Escolha a opção de APK.
5. **Aguardar a construção**: O processo de construção pode levar algum tempo. O Expo cuidará de todo o processo de construção na nuvem. Você verá um link no terminal onde poderá acompanhar o progresso da construção.
6. **Baixar o APK**: Após a construção ser concluída, você receberá um link para baixar o arquivo APK. Clique no link ou copie-o para o navegador para baixar o arquivo.

## [Passos para Gerar o APK com EAS](https://docs.expo.dev/build-reference/apk/)
Após validar o funcionamento do aplicativo no Expo Go, você pode gerar o APK para Android usando o EAS Build. Siga os passos abaixo:
- Crie na raiz do projeto o arquivo `eas.json` com o seguinte conteúdo:
```json
{
    "build": {
        "development": {
            "environment": "development"
        },
        "preview": {
            "environment": "preview"
        },
        "production": {
            "environment": "production"
        },
        "my-profile": {
            "environment": "production"
        }
    }
}
```
Você pode executar o mesmo processo de compilação normalmente executado nos servidores EAS Build diretamente na sua máquina usando o eas build --localsinalizador. Essa é uma maneira útil de depurar falhas de compilação que estão ocorrendo em suas compilações na nuvem, as quais você pode não conseguir reproduzir sem executar o mesmo conjunto de etapas.

terminal
```bash
eas build -p android
```