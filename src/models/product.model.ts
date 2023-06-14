const products = [
  {
    "id": 1,
    "name": "Example Product 1",
    "price": 10.00,
    "currency": "USD",
  },
  {
    "id": 2,
    "name": "Example Product 2",
    "price": 15.00,
    "currency": "USD",
  },
  {
    "id": 3,
    "name": "Example Product 3",
    "price": 20.00,
    "currency": "USD",
  },
  {
    "id": 4,
    "name": "Example Product 4",
    "price": 25.00,
    "currency": "USD",
  },
];

export function find(id: number) {
  return new Promise((resolve, reject) => {
    resolve(products.find((prod) => prod.id === id));
  });
}