# Aula05 - Construtores

## Exemplo Método Construtor
- Método de entrada construtor, método que possui o mesmo nome da Classe.
- Método de saída toString
```dart
import 'dart:io';

class Candidato {
  //Atributos
  int id = 0;
  String nome = '';
  int votos = 0;

  //Método construtor
  Candidato(this.id, this.nome, this.votos);
  //Metodo toString
  @override
  String toString() {
    return '{id: $id, nome: $nome, votos: $votos}';
  }
}

void main(){
    String? entrada;
    String nome;
    int votos;
    while(entrada == null){
        print('Digite o nome do candidato: ');
        entrada = stdin.readLineSync();
    }
    nome = entrada;
    entrada = null;
    while(entrada == null){
        print('Digite a quantidade de votos: ');
        entrada = stdin.readLineSync();
    }
    votos = int.parse(entrada!);
    entrada = null;
    //Utilizando o método construtor
    Candidato candidato = Candidato(1, nome, votos);
    //Exibindo os dados utilizando o método toString
    print(candidato);
}
```

## Desafios
<table>
<tr>
<td><b>Desafio</b></td><td><b>Exemplo de saída</b></td>
</tr>
<tr>
<td>

- 1 Crie um programa que calcule a porcentagem de votos de candidatos:
    - Deve possuir um menú com opções de adicionar, excluir, mostrar porcentagem e sair.
    - Ao adicionar um candidato deve pedir o nome e a quantidade de votos
    - Ao mostrar a lista exiba na tela o nome dos candidatos, total e a porcentagem de votos de cada um.
</td>
<td>

```bash
dart candidatos.dart
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
1
Digite o nome do candidato:
Lula
Digite a quantidade de votos:
100
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
3 - Mostrar porcentagem de votos
4 - Sair
1
Digite o nome do candidato:
Jair
Digite a quantidade de votos:
50
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
1
Digite o nome do candidato:
Jurema
Digite a quantidade de votos:
75
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
3
Candidatos      Votos   Porcentagem
Lula    100     44.44%
Jair    50      22.22%
Jurema  75      33.33%
1 - Adicionar candidato
2 - Excluir candidato
3 - Mostrar porcentagem de votos
4 - Sair
```
</td>
</tr>
<tr>
<td colspan=2>

- 2 Crie um programa com funcionalidades semelhantes a acima, porém que liste e classifique pacientes aptos ou não aptos a tomar a vacina contra a dengue.
    - Como entrada deve receber o nome do paciente, idade e sexo:
    - Estão aptos homens entre 14 e 50 anos e mulheres entre 20 e 40 anos de idade.

</td>
</tr>
</table>