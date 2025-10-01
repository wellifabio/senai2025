# Aula 10 - Alterar ícone do aplicativo

## 1 Gerar o Ícone
Use o comando flutter_launcher_icons:
- Uma maneira simples é usar o pacote flutter_launcher_icons.
- Instale o pacote no `pubspec.yaml` e rode flutter pub get.
```
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^5.0.0
  flutter_launcher_icons: ^0.14.4 # Verifique a versão mais recente

flutter_icons:
  android: "launcher_icon"
  ios: true
  image_path: "assets/logo.png"

flutter:
  uses-material-design: true
  assets:
    - assets/
```
- Use um ícone de alta resolução (1024x1024 pixels) e salve-o na pasta assets/icons (ou similar) do seu projeto.
- Execute os comandos:
```bash
flutter pub run flutter_launcher_icons
flutter clean
flutter pub get
```
- Isso irá gerar os ícones para Android e iOS automaticamente.
- Verifique as pastas android/app/src/main/res e ios/Runner/Assets.xcassets/AppIcon.appiconset para os ícones gerados.
- Teste o aplicativo em um emulador ou dispositivo real para ver o novo ícone.
## 2 Alterar o Ícone Manualmente
- Se preferir, você pode alterar o ícone manualmente.
- Para Android, substitua os arquivos de ícone nas pastas android/app/src/main/res/mipmap-*.
- Para iOS, substitua os arquivos de ícone em ios/Runner/Assets.xcassets/AppIcon.appiconset.
- Certifique-se de que os ícones estejam nos tamanhos corretos para cada plataforma.
- Teste o aplicativo em um emulador ou dispositivo real para ver o novo ícone.
## 3 Considerações Finais
- Sempre faça backup dos ícones originais antes de substituí-los.
- Verifique as diretrizes de design de ícones para Android e iOS para garantir que seu ícone esteja em conformidade.