const router = require("express").Router();

const {
  getCurrencies,
  getCurrenciesSymbol,
} = require("../controllers/currencies.controller");

// router.get("/", (request, response) => {
//     response.send("<h1>Currencies Database</h1>");
//   });

router.get("/", getCurrencies);

router.get("/:symbol", getCurrenciesSymbol);


module.exports = router;