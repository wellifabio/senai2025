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
    //Chamando a função dentro do print
    print('10 x 5 = ${multDois(10,5)}');
    //Exercício02: Crie uma função que divida dois números reais e retorne o resultado,
    // caso o divisor seja 0 imprima a mensagem 'Proibido dividir por 0' e retorne -1
    print('10 / 0 = ${divDois(10,0)}');
    //Desafio: Crie uma função que calcule o fatorial de um número: Teste com números menores que 50
    int val = 50;
    print('O fatorial de ${val} é ${fat(val)}');
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

int multDois(int a, int b){
    return a * b;
}

double divDois(int a, int b){
    if(b == 0){
        print('Proibido dividir por 0');
        return -1;
    }
    return a / b;
}

//Exemplo de função recursiva para calcular fatorial
double fat(int n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * fat(n - 1);
    }
}