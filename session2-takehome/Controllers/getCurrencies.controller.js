const fetch = require("node-fetch");

async function fetchApi(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    data = JSON.stringify(data);
    return data;
  } catch (error) {
    return "failed";
  }
}

function isValid(value, currency, toCurrency) {
  if (value < 0) {
    return false;
  } else if (currency !== "currency" || currency.length !== 3) {
    return false;
  } else if (toCurrency !== "to_currency" || toCurrency.length !== 3) {
    return false;
  }
  return true;
}

const getCurrencies = async (request, response) => {
  const currenciesData = await fetchApi("https://open.er-api.com/v6/latest");
  const { rates } = JSON.parse(currenciesData);
  if (rates) {
    let currencies = [];
    for (const [key, value] of Object.entries(rates)) {
      currencies.push(key);
    }
    response.status(200).json({ data: currencies });
  } else {
    response.status(500).json({
      message: "The service is currently down, please check again later",
    });
  }
};

const getConvertedCurrency = async (request, response) => {
  const query = request.query;
  if (isValid(Number(query.value), query.currency, query.to_currency)) {
    const currenciesData = await fetchApi(
      `https://open.er-api.com/v6/latest/${query.currency}`
    );
    const { rates } = JSON.parse(currenciesData);
    if (rates) {
      let convertedValue = 0;
      for (const [key, value] of Object.entries(rates)) {
        if (key === query.to_currency.toUpperCase) {
          convertedValue = value * query.value;
          break;
        }
      }
      if (convertedValue) {
        response.status(200).json({ result: convertedValue });
      } else {
        response
          .status(404)
          .json({ message: "Cannot find given currency code" });
      }
    } else {
      response.status(500).json({
        message: "The service is currently down, please check again later",
      });
    }
  } else {
    response
      .status(400)
      .json({ message: "Incomplete or Incorrect data passed" });
  }
};

module.exports = {
  getCurrencies: getCurrencies,
  getConvertedCurrency: getConvertedCurrency,
};
