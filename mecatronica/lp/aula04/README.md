# Aula04
## Condicionais (if) ou (se)
    - if(teste lógico){verdadeiro}
    - if(teste lógico){verdadeiro} else {falso}
    - if(teste lógico){verdadeiro} else if(teste lógico) {verdadeiro} else {falso}
    - else = senão

## Árvore binária
<img src="arvore.png">

# Teste lógico
- (==) igual
- (!=) diferente
- (>) maior
- (<) menor
- (>=) maior ou igual
- (<=) menor ou igual

- && => AND => E
- || => OR => OU
- ! => NOT => NÃO

# Tabela verdade
<table border="0">
	<tr>
		<td>
			<table border="1">
				<tr><td colspan="3">AND</td></tr>
				<tr><td>V</td><td>V</td><td>V</td></tr>
				<tr><td>V</td><td>F</td><td>F</td></tr>
				<tr><td>F</td><td>V</td><td>F</td></tr>
				<tr><td>F</td><td>F</td><td>F</td></tr>
			</table>
		</td>
		<td>
			<table border="1">
				<tr><td colspan="3">OR</td></tr>
				<tr><td>V</td><td>V</td><td>V</td></tr>
				<tr><td>V</td><td>F</td><td>V</td></tr>
				<tr><td>F</td><td>V</td><td>V</td></tr>
				<tr><td>F</td><td>F</td><td>F</td></tr>
			</table>
		</td>
		<td>
			<table border="1">
				<tr><td colspan="2">NOT</td></tr>
				<tr><td>V</td><td>F</td></tr>
				<tr><td>F</td><td>V</td></tr>
			</table>
		</td>
	</tr>
</table>

# Exemplos
- exp1.c
```c
#include <stdio.h>
int main(){
	if(1) printf("Verdadeiro\n");
	if(0) printf("Falso");
	return 0;
}
```
- Caso queiramos utilizar as palavras reservadas **true** ou **false** ou variáveis do tipo **bool** precisamos da biblioteca <stdbool.h>
```c
#include <stdio.h>
#include <stdbool.h>
int main(){
	if(true) printf("Verdadeiro\n");
	if(false) printf("Falso");
	return 0;
}
```
- Os dois exemplos acima mostram **"Verdadeiro"**
- exp2.c
```c
#include <stdio.h>
/*Programa que lê um número "a" e informa se é par ou impar*/
int main(){
	//Declaração de variáveis
	int a, b;
	//Etrada de dados
	printf("Digite um número inteiro:");
	scanf("%d", &a);
	//Processamento (resto da divisão inteira)
	b = a % 2;
	//Saída com condicional SE o resto for 1 é impar, senão é par
	if(b) printf("Impar");
	else printf("Par");
	//Fim
	return 0;
}
```
- exp3.c
```c
#include <stdio.h>
/*Programa que avalia médias de 0 a 100 (Aprovado se maior ou igual a 50)*/
int main(){
	//Declaração de variáveis
	int media;
	//Etrada de dados
	printf("Digite a média final do aluno de 0 a 100:");
	scanf("%d", &media);
	//Processamento e saída com condicional
	if(media >= 50)
		printf("Aprovado");
	else
		printf("Reprovado");
	//Fim
	return 0;
}
```
-exp4.c
```c
#include <stdio.h>
/*Programa que avalia médias com três critérios
"Aprovado" >= 50
"Reprovado" < 20
"Recuperação" entre 20 e 49
*/
int main(){
	//Declaração de variáveis
	int media;
	//Etrada de dados
	printf("Digite a média final do aluno de 0 a 100:");
	scanf("%d", &media);
	//Processamento e saída com condicional
	if(media >= 50)
		printf("Aprovado");
	else{
		if(media < 20)
			printf("Reprovado");
		else
			printf("Recuperação");
	}
		
	//Fim
	return 0;
}
```
```c
#include <stdio.h>
/*Programa que avalia médias com três critérios
"Aprovado" >= 50
"Reprovado" < 20
"Recuperação" entre 20 e 49
Utilizando o esle if
*/
int main(){
	//Declaração de variáveis
	int media;
	//Etrada de dados
	printf("Digite a média final do aluno de 0 a 100:");
	scanf("%d", &media);
	//Processamento e saída com condicional
	if(media >= 50)
		printf("Aprovado");
	else if(media < 20)
		printf("Reprovado");
	else
		printf("Recuperação");	
	//Fim
	return 0;
}
```
exp5.c
```c

#include <stdio.h>
/*Programa que avalia médias com critérios
"Aprovado" >= 50 E Frequência >= 75 %
total de presenças
*/
int main(){
	//Declaração de variáveis
	int nota1, nota2, nota3, media;
	float aulas, presencas, frequencia;
	//Entradas
	printf("Digite as três notas separadas por espaços: ");
	scanf("%d %d %d", &nota1, &nota2, &nota3);
	printf("Digite o total de aulas dadas: ");
	scanf("%d",&aulas);
	printf("Digite o total de precenças: ");
	scanf("%d",&presencas);
	
	//Processamento
	media = (nota1 + nota2 + nota3) / 3;
	frequencia = presencas / aulas;
	
	//Saídas parciais
	printf("Média = %d\n", media);
	printf("Frequência = %.2f\t ou %.0f%%\n", frequencia, frequencia * 100);

	//Processamento e saída com condicional
	if(media >= 50 && frequencia >= 0.75)
		printf("Aprovado");
	else
		printf("Reprovado");
	//Fim
	return 0;
}
```
## Atividades práticas
- Desenvolva os programas a seguir conforme os **Fluxogramas**
- 1 ![Fluxograma](./fluxo01.png)
- 2 ![Fluxograma](./fluxo02.png)
- 3 ![Fluxograma](./fluxo03.png)

## Entrega:
- Forms: https://forms.gle/dTiYAW6nXpaJzb5L7