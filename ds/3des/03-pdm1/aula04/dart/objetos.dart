void main(){
    //Instância prod da classe Produto
    Produto prod = new Produto();
    //Configurando o objeto
    prod.id = 1;
    prod.nome = 'Camiseta';
    prod.preco = 39.9;
    //Mostrando o objeto
    print(prod);
}

//Classe
class Produto{
    //Atributos
    int id = 0;
    String nome = '';
    String? descricao;
    double preco = 0;
    //Métodos
    toString(){
        return '$id, $nome, $descricao, $preco';
    }
}