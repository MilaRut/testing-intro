const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test('все товары c "asc" сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const ids = sortProductsByPrice(products, 'asc').map(p => p.id);
    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const ids = sortProductsByPrice(products).map(p => p.id);
    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('товары [1, 3, 4] c "asc" сортируются как [3, 4, 1]', () => {
    const filtered = products.filter(({ id }) => [1, 3, 4].includes(id));
    const ids = sortProductsByPrice(filtered, 'asc').map(p => p.id);
    expect(ids).toEqual([3, 4, 1]);
  });

  test('все товары c "desc" сортируются как [1, 2, 4, 5, 6, 3]', () => {
    const ids = sortProductsByPrice(products, 'desc').map(p => p.id);
    expect(ids).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test('товары [3, 1, 4] c "desc" сортируются как [1, 4, 3]', () => {
    const filtered = products.filter(({ id }) => [3, 1, 4].includes(id));
    const ids = sortProductsByPrice(filtered, 'desc').map(p => p.id);
    expect(ids).toEqual([1, 4, 3]);
  });

  test('товары [5, 2, 6] c "desc" сортируются как [2, 5, 6]', () => {
    const filtered = products.filter(({ id }) => [5, 2, 6].includes(id));
    const ids = sortProductsByPrice(filtered, 'desc').map(p => p.id);
    expect(ids).toEqual([2, 5, 6]);
  });

  test('"asc" не меняет исходный массив [1, 3, 4]', () => {
    const filtered = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(filtered, 'asc');
    expect(filtered.map(p => p.id)).toEqual([1, 3, 4]);
  });

  test('"desc" не меняет исходный массив [1, 3, 4]', () => {
    const filtered = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(filtered, 'desc');
    expect(filtered.map(p => p.id)).toEqual([1, 3, 4]);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    sortProductsByPrice(products);
    expect(products.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
