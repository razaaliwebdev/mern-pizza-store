import products from '../database/products.json' with { type: 'json' };

const allProductsController = async (req, res) => {
  res.json(products);
};

export default allProductsController;