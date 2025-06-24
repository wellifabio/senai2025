# Aula03 [meet](https://meet.google.com/hue-wpxb-sne)

## Fontes de dados variadas
### Temas
- Cantina: Online HTML https://wellifabio.github.io/cantina/
- Mercearia: Excel Online https://1drv.ms/x/s!AiDjuTwZCwoIglankFeV27w6OVbU?e=dZGdmE
- Entrega de lanches: Base de dados em arquivos CSV.

# Bancos de dados
## Normalização de dados
- Preparar dados brutos para serem depositados em um BD
- Benefícios
	- Reduz redundância
	- Reduz inconcistência
	- Melhora o desempenho
## Três principais formas normais
### Primeira forma normal
|Nº|Problema|Solução|
|-|-|-|
|1|Identificar campos compostos|Dividí-los em colunas|
|2|Identificar atributos multivalorados|Colocá-lo em outra tabela relacionada|

### Segunda forma normal
|Nº|Problema|Solução|
|-|-|-|
|1|Estar na primeira forma normal|Estar na primeira forma normal|
|2|Identificar campos dependentes|Identificar chaves e colocar em outra tabela|

### Terceira forma normal
|Nº|Problema|Solução|
|-|-|-|
|1|Estar na segunda forma normal|Estar na segunda forma normal|
|2|Identificar campos derivados|Eliminar estes campos pois serão calculados futuramente|

|Anotações|
|:-:|
|<img src="lousa02.jpg">|
|<img src="lousa03.jpg">|

|Exemplos:|
|:-:|
|<img src="dados_compras.png">|
|<img src="der_compras.png">|

## Demonstração com dados obtidos da Web
- Cantina: https://wellifabio.github.io/cantina/

<iframe title="cantina" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZGExMTNkZWEtOWQxNS00YzgwLWJlMzEtZTdkZmFlZDRjMGFkIiwidCI6ImIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCJ9" frameborder="0" allowFullScreen="true"></iframe>

|Link do Power BI|
|:-:|
|https://app.powerbi.com/view?r=eyJrIjoiZGExMTNkZWEtOWQxNS00YzgwLWJlMzEtZTdkZmFlZDRjMGFkIiwidCI6ImIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCJ9|

## Situação problema
|Contextualização|
|-|
|Você foi contratado para trabalhar em uma consultoria de pequenos negócios, seu superior solicitou que você faça algumas análises de dados de duas empresas, um armazém (centro de distribuição de produtos alimentícios) e uma empresa de entregas de lanches.|

|Desafio: 01|
|-|
|Faça uma análise de dados da planilha online com dados de uma mercearia  https://1drv.ms/x/s!AiDjuTwZCwoIglankFeV27w6OVbU?e=dZGdmE|
|A) Faça download da planilha<br>B) Abra o PowerBI e importe os dados<br>C) Transforme os dados numéricos<br>D) Acrescente uma coluna subtotal na tabela de Pedidos<br>E) Crie um DashBoard com pelo menos três gráficos, respondendo:<br>- Quais produtos mais ou menos pedidos<br>- Preço médio dos produtos<br>- Valor total dos pedidos<br>- Caso possua um e-mail corporativo, adicione um novo visual: com imagens.|

|Entregas|
|-|
|![Atividade01](./atvd1.png)|
|<i>Exemplo de dashboard do desafio1</i>|

|Desafio: 02|
|-|
|Faça uma análise de dados de um serviço de entrega de lanches com os dados CSV na pasta ./baitacaodelivery|
|A) Baixe os 6 arquivos CSV com as tabelas do sistema<br> B) Abra o power BI e iporte as planilhas<br>C) crie os relacionamentos identificando as chaves primárias e estrangeiras<br>D) Crie um dashboard onde o gestor possa ver os seguintes indicadores:<br>- Faturamento total<br>- Qual entregador fez mais ou menos entregas<br>- Qual o produto mais ou menos vendidos<br>- Qual região da cidade faz mais pedidos (mapa)<br>E) Crie outra página de dashboard onde o gestor possa verificar o desempenho dos pedidos como:<br>- Tempo médio dos pedidos na cozinha<br>- Tempo médio dos pedidos na entrega<br>- Entregas por entregador<br>- Entregas por dia<br>- Entregadores por região (mapa)|

|Entregas|
|:-:|
|![Atividade01](./atvd2.png)|
|<i>Exemplo de dashboard 01 do desafio 02</i>|
|![Atividade01](./atvd3.png)|
|<i>Exemplo de dashboard 02 da desafio 02</i>|
