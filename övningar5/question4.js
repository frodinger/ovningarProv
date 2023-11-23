// Skriv en funktion, convertToUSD som konverterar värdena i currencies
// till USD. Använd exchangeRates för att göra uträkningen

const exchangeRates = {
  EUR: 1.12, // Euro till USD
  GBP: 1.32, // Brittiskt pund till USD
  JPY: 0.0094, // Japansk yen till USD
};

const currencies = [
  { currency: "EUR", value: 100 }, // 100 Euro
  { currency: "GBP", value: 50 }, // 50 Brittiskt pund
  { currency: "JPY", value: 5000 }, // 5000 Japansk yen
];

function convertToUSD(currencyArr) {
  
  const usdArr = currencyArr.map (item => {
    const usdValue = exchangeRates[item.currency] * item.value;
    //item.value = usdValue;
    //return item;

    return {...item, value: Math.floor(usdValue)};
  });

  return usdArr;
}

console.log(convertToUSD(currencies));

/*
// Denna funktion använder map-metoden för att iterera över varje objekt i currencies-arrayen.
// För varje objekt hämtas växelkursen från exchangeRates-objektet baserat på valutan.
// Sedan multipliceras värdet med växelkursen för att få det konverterade värdet i USD.
// Det konverterade värdet och valutan "USD" läggs till i en ny array som returneras av funktionen.
function convertToUSD(currencyArr) {
  //Din kod här
  const convertedCurrencies = currencies.map((currency) => {
    const exchangeRate = exchangeRates[currency.currency];
    const convertedValue = currency.value * exchangeRate;
    return { currency: currency.currency, value: Math.floor(convertedValue) };
  });
  
  return convertedCurrencies;
}

console.log(convertToUSD(currencies));
*/
/* 
ska logga 
[{ currency: 'EUR', value: 112 },
{ currency: 'GBP', value: 66 },
{ currency: 'JPY', value: 47 }]
*/