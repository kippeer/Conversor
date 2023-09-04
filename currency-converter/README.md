Conversor de Moedas
Este é um aplicativo de Conversor de Moedas simples desenvolvido com React.js. Ele permite que você converta valores em Real Brasileiro (BRL) para outras moedas, como USD, EUR e INR.

Funcionalidades
Conversão de Moedas: Insira um valor em Real Brasileiro (BRL) e clique no botão "Converter" para obter o valor equivalente em USD, EUR e INR com base nas taxas de câmbio em tempo real.
Tecnologias Utilizadas
Este aplicativo foi desenvolvido utilizando as seguintes tecnologias:

React.js: Uma biblioteca JavaScript para construção de interfaces de usuário.
Axios: Uma biblioteca para fazer requisições HTTP.
API de Câmbio: Utilizamos a API da AwesomeAPI para obter as taxas de câmbio em tempo real.
Como Iniciar
Para rodar o aplicativo em sua máquina local, siga estas etapas:

Clone o repositório:

bash
Copy code
git clone [URL DO REPOSITÓRIO]
Navegue para o diretório do projeto:

bash
Copy code
cd conversor-de-moedas
Instale as dependências:

bash
Copy code
npm install
# ou
yarn install
Execute o aplicativo:

bash
Copy code
npm start
# ou
yarn start
Abra o aplicativo no seu navegador:

Abra http://localhost:3000 no seu navegador para usar o Conversor de Moedas.

Como Usar
Insira o Valor em Real Brasileiro (BRL):

No campo de entrada, insira o valor que deseja converter. Por padrão, o campo já inclui "R$ ".

Clique no Botão "Converter":

Após inserir o valor, clique no botão "Converter" para calcular a conversão para USD, EUR e INR.

Resultados da Conversão:

Os valores convertidos para USD, EUR e INR serão exibidos abaixo do botão "Converter" após o cálculo.

Exemplo de Uso
Suponhamos que você deseje converter R$ 100.00 para outras moedas:

Insira "100.00" no campo de entrada.

Clique no botão "Converter".

Os valores convertidos serão exibidos:

USD: $18.87
EUR: €16.04
INR: ₹1,409.47

Utilização da API
Para obter as taxas de câmbio em tempo real, utilizamos a API da AwesomeAPI. Aqui está como a API é usada no aplicativo:


const response = await axios.get(
  'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,INR-BRL'
);
const exchangeRates = response.data;


Contribuições
Contribuições são bem-vindas! Se você encontrar problemas ou melhorias para o aplicativo, sinta-se à vontade para abrir uma issue ou enviar um pull request.



