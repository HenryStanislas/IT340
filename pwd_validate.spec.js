const pwd_validate = require('./pwd_validate.js')

test('vérification 8 characteres', () => {
    expect(pwd_validate.checkPassword('gl1*')).toBe(false);   
  });

  test('vérification contient un chiffre', () => {
    expect(pwd_validate.checkPassword('abcdefg*')).toBe(false);
  });

  test('vérification contient un carac spec', () => {
    expect(pwd_validate.checkPassword('abcdefg4')).toBe(false);
  });

  test('vérification contient une lettre', () => {
    expect(pwd_validate.checkPassword('123456789*')).toBe(false);
  });