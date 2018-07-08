function generateCustomerSalesMap(salesData, customerData) { //reduce solution
  const customers = customerData.reduce(function(accumulated, obj) {
      let key = obj['id'];
      accumulated[key] = obj['name'];
      return accumulated;
    }, {});
  return salesData.reduce(function(accumulated, obj) {
    let key = customers[obj['customerId']];
    if(!accumulated[key]) {
      accumulated[key] = 0;
    }
    accumulated[key] += obj['total'];
    return accumulated;
  }, {});
}

// function generateCustomerSalesMap(salesData, customerData) { //for loop solution
//   let final = {};
//   for($i = 0; $i < customerData.length; $i++) {
//     let sales = 0;
//     for($y = 0; $y < salesData.length; $y++) {
//       if(salesData[$y]['customerId'] === customerData[$i]['id']) {
//         sales += salesData[$y]['total'];
//       }
//       final[customerData[$i]['name']] = sales;
//     }
//   }
//   return final;
// }

module.exports = generateCustomerSalesMap;