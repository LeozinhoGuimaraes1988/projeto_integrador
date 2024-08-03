import api from '../../services/api';

const saveApiProduct = (body, token) => {
  return api.post(
    '/products',
    {
      name: body.name,
      manufacturer: body.manufacturer,
      category: body.category,
      price: body.price,
      url1: body.url1,
      url2: body.url2,
      description: body.description,
    },
    { headers: { Authorization: token } }
  );
};
export default saveApiProduct;
