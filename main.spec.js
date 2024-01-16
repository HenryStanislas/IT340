const { getBalance } = require('./bank');
const DAO = require('./bankDAO');

test('retrieveBalance', () => {
  const accountId = '789'; 

  const spy = jest.spyOn(DAO, 'retrieveBalance').mockImplementation(() => {});
  

  expect(spy).toHaveBeenCalledWith(accountId);
});