const expect = require('chai').expect;
const generateCustomerSalesMap = require('../acmeSales');

const sales = [
  {
    customerId: 1,
    orderId: 1,
    total: 3
  },
  {
    customerId: 2,
    orderId: 2,
    total: 4
  },
  {
    customerId: 3,
    orderId: 3,
    total: 6
  },
  {
    customerId: 2,
    orderId: 4,
    total: 4
  },
  {
    customerId: 2,
    orderId: 5,
    total: 3
  },
  {
    customerId: 3,
    orderId: 6,
    total: 2
  },
  {
    customerId: 1,
    orderId: 7,
    total: 3
  }
];

const customers = [
  {
    id: 1,
    name: 'Larry'
  },
  {
    id: 2,
    name: 'Moe'
  },
  {
    id: 3,
    name: 'Curly'
  }
];

describe('generateCustomerSalesMap', () => {
  it('exists', () => {
    expect(generateCustomerSalesMap).to.be.ok;
  });
  it('returns an object', () => {
    expect(typeof(generateCustomerSalesMap(sales, customers))).to.eql('object');
  });
  it('returns a combined object', () => {
    expect(generateCustomerSalesMap(sales, customers)).to.eql({Larry: 6, Moe: 11, Curly: 8});
  });

})