const bankDAO = require('./bankDAO.js');

function getBalance(accountId) {
  bankDAO.retrieveBalance(accountId);
}

module.exports = { getBalance };