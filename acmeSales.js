// function generateCustomerSalesMap(salesData, customerData) {
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

// function generateCustomerSalesMap(salesData, customerData) {
//   const figures = salesData.reduce(function(accumulated, obj) {
//       let key = obj['customerId'];
//       if(!accumulated[key]) {
//         accumulated[key] = 0;
//       }
//       accumulated[key] += obj['total'];
//       return accumulated;
//     }, {});
//   let final = {};
//   for($i = 0; $i < customerData.length; $i++) {
//     final[customerData[$i]['name']] = figures[customerData[$i]['id']];
//   }
//   return final;
// }

function generateCustomerSalesMap(salesData, customerData) {
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

module.exports = generateCustomerSalesMap;