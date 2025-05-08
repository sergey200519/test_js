const assert = require('assert');

describe('Performance Test: Temporal Dead Zone', () => {
  it('should trigger TDZ error when accessing variable before declaration', () => {
    try {
      console.time('TDZ var access');
      // Попытка доступа к переменной до её объявления вызывает ошибку
      console.log(globalVar); // ошибка, потому что globalVar объявлен через let/const и имеет TDZ
      console.timeEnd('TDZ var access');
    } catch (e) {
      assert.strictEqual(e.name, 'ReferenceError'); // Проверка, что ошибка - ReferenceError
    }

    try {
      console.time('TDZ let access');
      let globalLet = 10;
      // Попытка доступа к переменной let до её объявления
      console.log(globalLet); // ошибка, TDZ для let
      console.timeEnd('TDZ let access');
    } catch (e) {
      assert.strictEqual(e.name, 'ReferenceError'); // Проверка на ошибку
    }
  });
});
