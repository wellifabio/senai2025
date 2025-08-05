# Aula02 - Exercícios/Desafios

## Exercício
Crie a mesma calculadora de IMC que foi criada em App Inventor e em Flutter no semestre passado, mas utilizando o **React Native + Expo**. Para isso, crie um novo projeto chamado **avaliacao_imc** e siga os passos da aula01.
- O Aplicativo terá apenas uma tela, onde o usuário irá informar o peso e a altura, e ao clicar no botão "Calcular", o aplicativo irá calcular o IMC e exibir o resultado em um `<Text></Text>`.

|![IMC](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/imc0.png?raw=true)|![IMC](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/imc1.png?raw=true)|
|:-:|:-:|
|Tela Inicial|Resultado|

### Desafios
|Wireframes01|Wireframes02|Wireframes03|Desafios|
|-|-|-|-|
|**Financiamentos**||||
|![Financ 0](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/financ0.png?raw=true)|![Financ 1](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/financ1.png?raw=true)|![Financ 2](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/financ2.png?raw=true)|**Contextualização:** As taxas de juros continuam autíssimas dificultando a aquisição de bens e serviços. Antes de comprar um bem financiado como um carro, uma moto, um imóvel ou até mesmo um eletrodoméstico, é importante simular o valor das parcelas e o custo total do financiamento.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada o valor do bem, o número de parcelas, a taxa de juros mensal e as taxas adicionais e exibe o valor da parcela e o Montante total do financiamento:<br>**Fórmula do juros compostos:** $M = C \times (1+i)^t$|
|**Investimentos**||||
|![Invest 0](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/invest0.png?raw=true)|![invest 1](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/invest1.png?raw=true)|![Invest 2](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/invest2.png?raw=true)|**Contextualização:** Uma alternativa ao financiamento é a paciência, quando a aquisição de um bem não é de necessidade básica ou essencial. Neste caso, é possível investir o dinheiro e esperar o tempo necessário para adquirir o bem à vista.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada o valor mensal que podemos investir o número de meses e a taxa de juros mensal e exibe o montante acumulado sem juros e com juros compostos.<br>**Fórmula** laço de repetição, exemplo na planilha de Excel nesta pasta testes.xlsx|
|**Bitola de fios**||||
|![Bitola](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/bitola0.png?raw=true)|![Bitola](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/bitola1.png?raw=true)|![Bitola](https://github.com/wellifabio/senai2025/blob/main/ds/3des/03-pdm1/aula08/prints/bitola2.png?raw=true)|**Contextualização:** O professor de instalações elétricas ensina seus alunos como calcular a bitola adequada para cada uso de uma instalação. Solicitou que os alunos de Desenvolvimento de sistemas criem um aplicativo que faça este cálculo.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada a corrente elétrica em ampères e a distância em metros e exibe a bitola do fio em milímetros quadrados, tanto para tensão de 110V quanto para 220V.<br>**Fórmula:**<br>bitola110 = (2 * corrente * distância) / 294.64<br>bitola220 = (2 * corrente * distância) / 510.4|

#### Fórmulas em React Native
- IMC
```tsx
  imc = peso / (altura * altura);
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }
  resultado = `Seu IMC é ${imc.toFixed(2)} e você está classificado como ${classificacao}.`;
```
- Financiamento
```tsx
  m = c * Math.pow((1 + i), t);
  p = m / t;
```
- Investimento
```tsx
  montanteS = mensal * t;
  for (j = 1; j <= t; j++) {
    montanteR = montanteR + montanteR * i + mensal;
  }
```

Faça os exercícios utilizando o React Native, na IDE **VsCode** e execute na web ou emulador **Expo Go**.

## Entregas
- Cada projeto deve estar em um **repositório público separado no GitHub**.
- Nomes sugeridos para os repositórios:
  - AvaliacaoIMC-react
  - Financiamento-react
  - Investimento-react
  - Bitola-react
- Os links dos repositórios devem ser enviados para o professor neste **[Formulário de Entrega](https://docs.google.com/forms/d/e/1FAIpQLSeyMceilFyv5crYHB1OZs3jnkr6X83o4O6PXe3OnAD03E_JWQ/viewform?usp=dialog)**.
- Todos os repositórios devem ter no arquivo **README.md**
  - Descrição do projeto e tecnologias utilizadas
  - Print das telas (salvos na pasta assets/images no projeto)
  - Passo a passo de como executar
