const { getBalance } = require('./bank');

const accountId = '123';
getBalance(accountId);

module.exports = { getBalance };