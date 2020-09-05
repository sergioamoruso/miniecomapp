const mockConfig = {
  apiSignatureName: 'signatureName',
  apiSignatureLastName: 'signatureLastName',
};
jest.mock('./config', () => mockConfig);

const response = {
  categories: [
    'Computación',
    'Laptops y Accesorios',
    'Accesorios para Laptops',
    'Soportes',
  ],
  items: [
    {
      id: 'MLA661882408',
      title: 'Woox - Soporte De Diseño Para Notebook Hecho En Madera',
      price: {
        currency: 'ARS',
        amount: 831.6,
        decimals: 6,
      },
      picture: 'http://http2.mlstatic.com/D_751968-MLA41814846756_052020-I.jpg',
      condition: 'new',
      free_shipping: false,
    },
    {
      id: 'MLA866468472',
      title: 'Soporte De Diseño Para Notebook Hecho En Madera Noble',
      price: {
        currency: 'ARS',
        amount: 650,
        decimals: null,
      },
      picture: 'http://http2.mlstatic.com/D_655900-MLA43367988104_092020-I.jpg',
      condition: 'new',
      free_shipping: false,
    },
  ],
};

describe('signResponse should', () => {
  beforeEach(() => {
    sut = require('./signResponse');
  });

  test('sign response correctly', () => {
    const result = sut(response);

    expect(result.author).toBeDefined();
    expect(result.author).toEqual({
      name: 'signatureName',
      lastName: 'signatureLastName',
    });
  });
});
