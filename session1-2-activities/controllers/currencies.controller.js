const currenciesData = require("../database/currencies.json");

const getCurrencies = (request, response) => {
  // Activity 2: Filter with Query
  if (request.query.min_value) {
    const minValue = request.query.min_value;
    const minValueObject = currenciesData.data.filter(
      (obj) => Number(obj.min_size) >= Number(minValue)
    );
    if (minValueObject) {
      response.json(minValueObject);
    } else {
      response.status(404);
      response.json({ message: "Minimum value not found" });
    }
  } else {
    response.json(currenciesData);
  }
};

const getCurrenciesSymbol = (request, response) => {
  const requestSymbol = request.params;
  const symbolData = currenciesData.data.find(
    (obj) => obj.id.toLowerCase() === requestSymbol.symbol.toLowerCase()
  );
  if (symbolData) {
    response.json(symbolData);
  } else {
    response.status(404);
    response.json({ message: "Invalid Symbol" });
  }
};

module.exports = {
  getCurrencies: getCurrencies,
  getCurrenciesSymbol: getCurrenciesSymbol,
};
