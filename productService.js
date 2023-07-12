async function getProduct(productId) {
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;

  const response = await fetch(apiUrl);
	const jsonData = await response.json();
	
	return jsonData;
}

module.exports = getProduct;
