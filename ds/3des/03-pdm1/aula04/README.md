# Aula04 - DART
- Instalação [Flutter](https://docs.flutter.dev/get-started/install)
    - Instalar o flutter, descompactando em **C:\\**
    - Configurar a veriável de ambiente do sistema (RUM:sysdm.cpl) **path**
        - Adicionando **C:\flutter\bin**
- Site oficial do Dart https://dart.dev/
- ![path](./path.png)
## Demonstração
- Alô mundo em Dart
- main.dart
```dart
void main(){
    print('Alô mundo!');
}
```
- Variáveis em Dart
```dart
void main(){
    int x = 10;
    double y = 50.5;
    String texto = 'Qualquer coisa';
    bool vf = true;
    var semtipo = 'oi';
    dynamic dinamico = 'oi';

    //Saída com concatenação de string
    print("O valor de x é " + x.toString());
    print("O valor de y é " + y.toString());
    print("O valor de texto é " + texto);
    //Saída com template String
    print("O valor de x é ${x}");
    print("O valor de y é ${y}");
    print("O valor de texto é ${texto}");
    print("O valor de vf é ${vf}");
    print("O valor de semtipo  é ${semtipo}");
    print("O valor de semtipo  é ${semtipo}");
    print("O valor de dinamico  é ${dinamico}");
    dinamico = 50.9;
    print("O valor de dinamico  é ${dinamico}");
}
```