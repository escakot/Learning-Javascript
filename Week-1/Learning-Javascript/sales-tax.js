var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates)
{
  let results = [];
  for (var company of salesData) {
    let sales = company["sales"].reduce(add, 0);
    if (results[company.name])
    {
      results[company["name"]]["totalSales"] += sales;
      results[company["name"]]["totalTaxes"] += sales * taxRates[company["province"]];
    } else {
      results[company.name] = {
        totalSales: sales,
        totalTaxes: sales * taxRates[company.province]
      }
    }
  }

  return results
}

function add(a, b)
{
  return a + b;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)
