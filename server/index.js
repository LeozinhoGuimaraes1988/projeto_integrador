const express = require('express');
const app = express();
const productRoutes = require('./productsRoutes');

// Middleware para permitir o parsing de JSON
app.use(express.json());

// Usar as rotas definidas em productRoutes
app.use('/api/products', productRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
