// Função para buscar produtos recentes
import api from '../../services/api';

export async function getApiAllProducts() {
  return await api.get('/products');
}
