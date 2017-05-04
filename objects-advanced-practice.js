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
    name: "Google",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// var totalSales = 0
// for (var i = 0; i < companySalesData[0].sales.length; i++) {
//   totalSales = totalSales + companySalesData[0].sales[i];
// }

function totalSales(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  return total;
}

function totalTax(totalSales, salesTax){
  return totalSales * salesTax;
}

function calculateSalesTax(companySalesData, salesTaxRates) {
  var result = {};
  for (var i = 0; i < companySalesData.length; i++) {
    var total = totalSales(companySalesData[i].sales);
    var tax = totalTax(total, salesTaxRates[companySalesData[i].province]);
    // console.log('Total: ', totalSales(companySalesData[i].sales));
    // console.log('Tax: ', totalTax(total, salesTaxRates[companySalesData[i].province]));
    result[companySalesData[i].name] = {
      totalSales: total,
      totalTax: tax
    }
  }
  return result;
}



console.log(calculateSalesTax(companySalesData, salesTaxRates));
