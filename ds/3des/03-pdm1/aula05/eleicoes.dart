import 'dart:io';

class Candidato {
  //Atributos
  int id = 0;
  String nome = '';
  int votos = 0;
  double porcentagem = 0.0;

  //Métodos
  //Construtor
  Candidato(this.id, this.nome, this.votos);

  @override
  String toString() {
    return '|$id|$nome|$votos|${porcentagem.toStringAsFixed(2)}|';
  }
}

class Eleicao {
    //Atributos
    int id = 0;
    String nome = '';
    List<Candidato> candidatos = [];
   
   //Métodos
    Eleicao(this.id, this.nome);

    votosTotal() {
        int total = 0;
        for (var candidato in candidatos) {
            total += candidato.votos;
        }
        return total;
    }

    calcularPorcentagem(){
        for (var candidato in candidatos) {
            candidato.porcentagem = (candidato.votos / votosTotal()) * 100;
        }
    }

    addCandidato(Candidato candidato){
        candidatos.add(candidato);
        calcularPorcentagem();
    }

    removeCandidato(int id){
        candidatos.removeWhere((candidato) => candidato.id == id);
        calcularPorcentagem();
    }

    @override
    String toString() {
        return '{id: $id, nome: $nome, candidatos: $candidatos}';
    }
}

void main(){
    Eleicao eleicao = Eleicao(1, 'Representante de turma');
    int menu = 0;
    while (menu != 4){
        print('1 - Adicionar candidato\n2 - Remover candidato\n3 - Mostrar resultados\n4 - Sair');
        menu = int.parse(stdin.readLineSync()!);
        switch (menu) {
            case 1:
                int id = eleicao.candidatos.isEmpty ? 1 : eleicao.candidatos[eleicao.candidatos.length - 1].id + 1;
                print('Digite o nome do candidato: ');
                String nome = stdin.readLineSync()!;
                print('Digite a quantidade de votos do candidato: ');
                int votos = int.parse(stdin.readLineSync()!);
                Candidato candidato = Candidato(id, nome, votos);
                eleicao.addCandidato(candidato);
                break;
            case 2:
                print('Digite o id do candidato: ');
                int id = int.parse(stdin.readLineSync()!);
                eleicao.removeCandidato(id);
                break;
            case 3:
                bool segunto = true;
                print('Resultados da eleição: ${eleicao.nome}');
                print('|id|Candidato|Votos|Porcentagem|');
                print('|-|-|-|-|');
                for (var candidato in eleicao.candidatos) {
                    if (candidato.porcentagem > 50) {
                        segunto = false;
                    }
                    print(candidato);
                }
                if(segunto) {
                    print('Nenhum candidato obteve mais de 50% dos votos!\nHaverá segundo turno');
                } else {
                    print('Um candidato obteve mais que 50% dos votos!\nNão haverá segundo turno');
                }
                break;
            case 4:
                print('Saindo...');
                break;
            default:
                print('Opção inválida!');
        }
    }
}