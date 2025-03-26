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
- Estudo de **variáveis** e **Strings** em Dart
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
- Estudo de **funções**
```dart
void main(){
    //Variáveis simples
    int v1 = 1253;
    int v2 = 3261;

    //Listas ou Vetores
    List<double> numeros = [9.9,85.08,99.9,74,100,85]; 

    //Chamando a função que soma dois múmeros
    int resultado = somaDois(v1,v2);

    //Mostrando o resultado
    print('A soma de ${v1} + ${v2} é ${resultado}');

    //Chamando a função que soma vários números
    double total = somaVarios(numeros);

    //Mostrando o resultado
    print('O total da soma de ${numeros} é ${total}');

    //Exercício01: Crie uma função que multiplique dois números inteiros e retorne o resultado
    //Exercício02: Crie uma função que divida dois números reais e retorne o resultado,
    // caso o divisor seja 0 imprima a mensagem 'Proibido dividir por 0' e retorne -1
    //Desafio: Crie uma função que calcule o fatorial de um número: Teste com números menores que 100
}

int somaDois(int a, int b){
    return a + b;
}

double somaVarios(List<double> vetor){
    double total = 0;
    for(var i = 0; i < vetor.length; i++){
        total += vetor[i];
    }
    return total;
}
```
