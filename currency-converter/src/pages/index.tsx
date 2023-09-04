import React, { useState } from 'react';
import axios from 'axios';

const IndexPage = () => {
  const [amount, setAmount] = useState<string>('R$ '); // Inicialize com "R$ "
  const [convertedAmounts, setConvertedAmounts] = useState({
    USD: '0.00',
    EUR: '0.00',
    INR: '0.00',
  });
  const [showResults, setShowResults] = useState(false);

  const convertCurrency = async () => {
    try {
      // Remova o "R$" antes de converter
      const numericAmount = parseFloat(amount.replace('R$ ', '').replace(',', '.'));

      // Faça uma solicitação para obter as taxas de câmbio em relação ao BRL
      const response = await axios.get(
        'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,INR-BRL'
      );
      const exchangeRates = response.data;

      // Realize a conversão para USD, EUR e INR
      const usdAmount = (numericAmount / exchangeRates['USDBRL'].high).toFixed(2);
      const eurAmount = (numericAmount / exchangeRates['EURBRL'].high).toFixed(2);
      const inrAmount = (numericAmount / exchangeRates['INRBRL'].high).toFixed(2);

      // Atualize os valores convertidos no estado
      setConvertedAmounts({
        USD: usdAmount,
        EUR: eurAmount,
        INR: inrAmount,
      });

      // Exiba os resultados após a conversão
      setShowResults(true);
    } catch (error) {
      console.error('Erro ao converter moedas:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Conversor de Moedas</h1>
      <div className="inputContainer">
        <p className="inputLabel">Insira o valor em Real Brasileiro (BRL) para converter:</p>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
        />
        <button onClick={convertCurrency} className="button">
          Converter
        </button>
      </div>
      {showResults && (
        <div className="resultContainer">
          <p className="resultLabel">Valor convertido:</p>
          <p className="resultText">USD: {convertedAmounts.USD}</p>
          <p className="resultText">EUR: {convertedAmounts.EUR}</p>
          <p className="resultText">INR: {convertedAmounts.INR}</p>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
