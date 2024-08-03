import api from '../../services/api';

export async function getApiProductsbyName(product) {
  return await api.get(`/products?name=${product}`);
}
