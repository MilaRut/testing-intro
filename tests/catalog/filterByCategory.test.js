const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test('"all" возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const ids = filterByCategory(products, 'all').map(p => p.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const ids = filterByCategory(products, undefined).map(p => p.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const ids = filterByCategory(products, '').map(p => p.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('"electronics" возвращает товары с ID [1, 2]', () => {
    const ids = filterByCategory(products, 'electronics').map(p => p.id);
    expect(ids).toEqual([1, 2]);
  });

  test('"books" возвращает товары с ID [3, 6]', () => {
    const ids = filterByCategory(products, 'books').map(p => p.id);
    expect(ids).toEqual([3, 6]);
  });

  test('"home" возвращает товары с ID [4, 5]', () => {
    const ids = filterByCategory(products, 'home').map(p => p.id);
    expect(ids).toEqual([4, 5]);
  });

  test('"clothes" возвращает пустой массив', () => {
    expect(filterByCategory(products, 'clothes')).toEqual([]);
  });

  test('"toys" возвращает пустой массив', () => {
    expect(filterByCategory(products, 'toys')).toEqual([]);
  });

  test('"sports" возвращает пустой массив', () => {
    expect(filterByCategory(products, 'sports')).toEqual([]);
  });
});
