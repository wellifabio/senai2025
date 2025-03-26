// Crie um programa que solicite ao usuário que informe sua idade e classifique-o
// Para entrada de dados precisamos da biblioteca dart:io
import 'dart:io';

void main(){
    int idade;
    print('Digite sua idade: ');
    //Entrada sempre é com String
    String? e = stdin.readLineSync();
    if(e != null){
        //Para operações lógicas ou matemáticas devemos converter de String para numerico
        idade = int.parse(e);
        if(idade < 10) print('Você é criança.');
        else if(idade < 15) print('Você é adolescente.');
        else if(idade < 20) print('Você é jovem.');
        else if(idade < 30) print('Você é adulto(a).');
        else if(idade < 40) print('Você é maduro(a).');
        else if(idade < 50) print('Você está na meia idade.');
        else if(idade < 80) print('Você é idoso.');
        else print('Você tem muita experiência.');
    } else {
        print('Idade não válida');
    }
}