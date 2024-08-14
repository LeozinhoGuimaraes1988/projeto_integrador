import api from '../../services/api';

const getCategory = (category) => {
  return api.get(`/products/category?name=${category}`);
};

export default getCategory;
