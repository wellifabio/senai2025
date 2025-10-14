# Aula 05 - Funções, Fórmulas e Gráficos no Excel

Nesta aula, vamos continuar explorando as funcionalidades do Excel, focando em funções, fórmulas e gráficos para analisar dados de vendas de pastéis.

## Objetivos

- Compreender a diferença entre funções e fórmulas.
- Aprender a utilizar funções básicas do Excel.
- Criar gráficos para visualizar dados de vendas.

## Funções e Fórmulas

- **Fórmula**: É uma expressão que realiza cálculos em células do Excel. Exemplo: `=A1+B1`.
- **Função**: É uma fórmula pré-definida que realiza cálculos complexos. Exemplo: `=SOMA(A1:A10)`.

## Gráficos

Os gráficos são ferramentas visuais que ajudam a representar dados de forma clara e concisa. Na próxima seção, vamos aprender a criar um gráfico de vendas.
### Criando um Gráfico de Vendas
1. Selecione os dados que deseja incluir no gráfico.
2. Vá para a aba "Inserir" no menu superior.
3. Escolha o tipo de gráfico que melhor representa seus dados (barras, colunas, linhas, etc.).
4. Personalize o gráfico com títulos, legendas e cores conforme necessário.

## Atividades Prática
1. Abra o Excel e crie uma nova planilha.
- Os sócios baseados nas estatísticas da aula anterior decidiram reajustar os preços dos pastéis para aumentar o lucro. Eles querem que você crie uma planilha para calcular o novo faturamento com os preços reajustados.
2. Insira os dados de vendas de pastéis conforme o exemplo abaixo:

| Sabor  | Quantidade Vendida | Custo Unitário | Preço Unitário | Custo Total | Faturamento | Lucro|
|-|:-:|:-:|:-:|:-:|:-:|:-:|
|Carne|150|5,26|12,00| =B2*C2| =B2*D2|=F2-E2|
|Queijo|200|4,27|12,00| =B3*C3| =B3*D3|=F3-E3|
|Frango|100|3,80|10,00| =B4*C4| =B4*D4|=F4-E4|
|Pizza |100|4,42|15,00| =B4*C4| =B4*D4|=F4-E4|
|Total||||=SOMA(E2:E5)|=SOMA(F2:F5)|=SOMA(G2:G5)|
|Média|||||=MÉDIA(F2:F5)|=MÉDIA(G2:G5)|
|Máximo|||||=MÁXIMO(F2:F5)|=MÁXIMO(G2:G5)|
|Mínimo|||||=MÍNIMO(F2:F5)|=MÍNIMO(G2:G5)|

3. Utilize funções como `SOMA`, `MÉDIA`, `MÁXIMO` e `MÍNIMO` para analisar os dados.
4. Crie um gráfico de colunas para visualizar o faturamento de cada sabor de pastel.
5. Crie um gráfico de barras para comparar o lucro de cada sabor de pastel.
6. Crie um gráfico de pizza para mostrar a participação de cada sabor no faturamento total.