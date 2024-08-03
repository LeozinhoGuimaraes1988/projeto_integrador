// Função para buscar produtos recentes
import api from '../../services/api';

export async function getApiAllProductsRecents() {
  return await api.get('/products/recents-all');
}
