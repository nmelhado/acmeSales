function generateCustomerSalesMap(salesData, customerData) {
  let final = {};
  for($i = 0; $i < customerData.length; $i++) {
    let sales = 0;
    for($y = 0; $y < salesData.length; $y++) {
      if(salesData[$y]['customerId'] === customerData[$i]['id']) {
        sales += salesData[$y]['total'];
      }
      final[customerData[$i]['name']] = sales;
    }
  }
  return final;
}

module.exports = generateCustomerSalesMap;