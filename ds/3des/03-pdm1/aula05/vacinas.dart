import 'dart:io';

class Paciente {

    int id = 0;
    String nome = '';
    int idade = 0;
    String sexo = '';
    bool apto = false;

    Paciente(this.id, this.nome, this.idade, this.sexo){
        if (sexo.toUpperCase() == 'M') {
            if(idade >= 14 && idade <= 50){
                apto = true;
            } else {
                apto = false;
            }
        }else{
            if(idade >= 20 && idade <= 40){
                apto = true;
            } else {
                apto = false;
            }
        }
    }

    @override
    String toString() {
        return 'Paciente{id: $id, nome: $nome, idade: $idade, sexo: $sexo, apto: $apto}';
    }
}

void main(){
    List<Paciente> pacientes = [];
    int menu = 0;
    while(menu!=4){
        print('1 - Cadastrar Paciente');
        print('2 - Excluir Paciente');
        print('3 - Listar Pacientes');
        print('4 - Sair');
        print('Digite a opção desejada: ');
        menu = int.parse(stdin.readLineSync()!);
        switch(menu){
            case 1:
                int id = pacientes.length == 0 ? 1 : pacientes.last.id + 1;
                print('Digite o nome do paciente: ');
                String nome = stdin.readLineSync()!;
                print('Digite a idade do paciente: ');
                int idade = int.parse(stdin.readLineSync()!);
                print('Digite o sexo do paciente (M/F): ');
                String sexo = stdin.readLineSync()!;
                Paciente paciente = Paciente(id, nome, idade, sexo);
                pacientes.add(paciente);
                break;
            case 2:
                print('Digite o id do paciente: ');
                int id = int.parse(stdin.readLineSync()!);
                for(int i = 0; i < pacientes.length; i++){
                    if(pacientes[i].id == id){
                        pacientes.removeAt(i);
                        print('Paciente removido com sucesso!');
                        break;
                    }
                }
                break;
            case 3:
                for(Paciente p in pacientes){
                    print(p.toString());
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