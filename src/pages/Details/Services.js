import api from '../../services/api';

export async function getApiDetailsProduct(id) {
  return await api.get(`/products/${id}`);
}
