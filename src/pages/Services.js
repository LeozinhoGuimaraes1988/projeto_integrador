// Serviço para buscar produtos recentes

import api from '../services/api';

// Função para buscar produtos recentes
export async function getApiRecentsProducts() {
  return await api.get('/products/recents');
}

// Função para buscar produtos recomendados
export async function getApiRecommendedsProducts() {
  return await api.get('/products/recommended');
}
