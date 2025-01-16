import products from '../database/products.json' with {type:"json"};

const getSingleProductController = (req, res) => {
  const { _id } = req.params;  // Extract the product ID from the URL params

  // Debugging: Log the incoming _id and the product data for comparison
  console.log('Received _id:', _id);

  // Find the product with the matching _id
  const product = products.find((prod) => {
    console.log('Checking product with _id:', prod._id.$oid);
    return prod._id.$oid === _id;
  });

  if (!product) {
    // If no product is found, return a 404 response
    return res.status(404).json({ message: 'Product not found' });
  }

  // Return the product as the response
  return res.json(product);
};

export default getSingleProductController;
