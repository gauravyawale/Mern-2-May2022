const {
    getCurrencies,
    getConvertedCurrency,
  } = require("./Controllers/getCurrencies.controller");
  
  const express = require("express");
  
  const app = express();
  
  const port = 8082;
  
  app.get("/exchange/currencies", getCurrencies);
  
  app.get("/exchange/convert", getConvertedCurrency);
  
  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
  