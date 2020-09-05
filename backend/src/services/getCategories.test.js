describe('getCategories should', () => {
  beforeEach(() => {
    sut = require('./getCategories');
  });

  test('return correct categories when present', () => {
    // GIVEN
    const filters = [
      {
        id: 'category',
        name: 'Categorías',
        type: 'text',
        values: [
          {
            id: 'MLA82085',
            name: 'Tablets',
            path_from_root: [
              {
                id: 'MLA1648',
                name: 'Computación',
              },
              {
                id: 'MLA400950',
                name: 'Tablets y Accesorios',
              },
              {
                id: 'MLA82085',
                name: 'Tablets',
              },
            ],
          },
        ],
      },
      {
        id: 'LINE',
        name: 'Línea',
        type: 'STRING',
        values: [
          {
            id: '107662',
            name: 'iPad',
          },
        ],
      },
      {
        id: 'BRAND',
        name: 'Marca',
        type: 'STRING',
        values: [
          {
            id: '9344',
            name: 'Apple',
          },
        ],
      },
    ];

    const expected = ['Computación', 'Tablets y Accesorios', 'Tablets'];

    // WHEN
    const result = sut(filters);

    // THEN
    expect(result).toEqual(expected);
  });

  test('return empty array when there are no categories', () => {
    const expected = [];
    const result = sut([]);
    expect(result).toEqual(expected);
  });
});
