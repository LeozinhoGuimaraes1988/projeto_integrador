const express = require('express');
const app = express();
const port = 5000;

// Dados simulados
const products = [
  {
    id: 1,
    name: 'Máquina de costura Singer',
    manufacturer: 'Singer',
    category: 'Casa',
    price: 699,
    url1: 'https://m.media-amazon.com/images/I/51ESbdnPiAL._AC_SL1500_.jpg',
    url2: 'https://m.media-amazon.com/images/I/61HtRhAVsxL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    name: 'Blusa Hering Manga Longa Feminina',
    manufacturer: 'Hering',
    category: 'Roupa',
    price: 39.99,
    url1: 'https://m.media-amazon.com/images/I/51foskVHXWL._AC_SX679_.jpg',
    url2: 'https://m.media-amazon.com/images/I/51zdPFtwSZL._AC_SY500_.jpg',
  },
  {
    id: 3,
    name: 'Relógio Casio Masculino Preto',
    manufacturer: 'Casio',
    category: 'Moda',
    price: 150.3,
    url1: 'https://m.media-amazon.com/images/I/618NQBPQPdL._AC_SY679_.jpg',
    url2: 'https://m.media-amazon.com/images/I/61Qx41sTX1L._AC_SX679_.jpg',
  },
  {
    id: 4,
    name: 'GameSir Controle Bluetooth',
    manufacturer: 'Nintendo',
    category: 'Jogos',
    price: 182.92,
    url1: 'https://m.media-amazon.com/images/I/51Zx9IJa7nL._AC_SX679_.jpg',
    url2: 'https://m.media-amazon.com/images/I/61SeI833WbL._AC_SX679_.jpg',
  },
  {
    id: 5,
    name: 'Bolsa Organizadora De Cabo',
    manufacturer: 'Vanova',
    category: 'Acessórios',
    price: 46.79,
    url1: 'https://m.media-amazon.com/images/I/51yA5+VqY6L._AC_.jpg',
    url2: 'https://m.media-amazon.com/images/I/71m+USAkXSL._AC_SL1500_.jpg',
  },
  {
    id: 6,
    name: 'Mesa para Notebook Portátil',
    manufacturer: 'UGreen',
    category: 'Acessórios',
    price: 80,
    url1: 'https://m.media-amazon.com/images/I/51IadPa764L._AC_SX569_.jpg',
    url2: 'https://m.media-amazon.com/images/I/71g+ohhZEoL._AC_SX569_.jpg',
  },
  {
    id: 7,
    name: 'Frigideira Funda Antiaderente',
    manufacturer: 'Tramontina',
    category: 'Casa',
    price: 116,
    url1: 'https://m.media-amazon.com/images/I/51zxR02iCWL._AC_SX569_.jpg',
    url2: 'https://m.media-amazon.com/images/I/711+Rj4F6iL._AC_SX569_.jpg',
  },
  {
    id: 8,
    name: 'Samsung Smart Gaming TV 43"',
    manufacturer: 'Samsung',
    category: 'Casa',
    price: 4098,
    url1: 'https://m.media-amazon.com/images/I/81djq+qgljL._AC_SX425_.jpg',
    url2: 'https://m.media-amazon.com/images/I/71JXdwNheJL._AC_SX425_.jpg',
  },
  {
    id: 9,
    name: 'Cesto com Tampa',
    manufacturer: 'OU',
    category: 'Casa',
    price: 99,
    url1: 'https://m.media-amazon.com/images/I/61scRb-dPVL._AC_SX569_.jpg',
    url2: 'https://m.media-amazon.com/images/I/61oJjc8nF5L._AC_SX569_.jpg',
  },
  {
    id: 10,
    name: 'Bolsa Feminina Lorena',
    manufacturer: 'Lorena Willibags',
    category: 'Moda',
    price: 49.9,
    url1: 'https://m.media-amazon.com/images/I/51Qa8BCwicL._AC_SX522_.jpg',
    url2: 'https://m.media-amazon.com/images/I/518yC0iUzUL._AC_SX522_.jpg',
  },
  {
    id: 11,
    name: 'Tablet 3 em 1, Tablet Android 13 de 10.1 polegadas',
    manufacturer: 'Dell',
    category: 'Informática',
    price: 719,
    url1: 'https://m.media-amazon.com/images/I/71qWXZxAjaL._AC_SX569_.jpg',
    url2: 'https://m.media-amazon.com/images/I/71+zI1TGFrL._AC_SX569_.jpg',
  },
  {
    id: 12,
    name: 'Creatina 300g Pura Monohidratada',
    manufacturer: 'Ellym Nutrition',
    category: 'Bem-Estar',
    price: 66.49,
    url1: 'https://m.media-amazon.com/images/I/61QTE3nOKbL._AC_SX522_.jpg',
    url2: 'https://m.media-amazon.com/images/I/81cDF0KU+QL._AC_SX522_.jpg',
  },
];

app.get('/api/products/category', (req, res) => {
  const category = req.query.name;
  if (category) {
    const filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    if (filteredProducts.length > 0) {
      res.json(filteredProducts);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } else {
    res.status(400).json({ message: 'Category parameter is required' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
