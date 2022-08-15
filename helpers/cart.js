const organizeCartItems = (cartItems) => {
  return cartItems?.map((item) => {
    return {
      product_id: item.id,
      name: item["product.name"],
      price: Number(item["product.price"]),
      weight: item["product.weight"],
      unit: item["product.unit"],
      quantity: item.quantity,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  });
};

const organizeCart = (cart, cartItems) => {
  const organizedCartItems = organizeCartItems(cartItems);

  return {
    cart_id: cart.id,
    products: organizedCartItems,
    createdAt: cart.createdAt,
    updatedAt: cart.updatedAt,
  };
};

module.exports = {
  organizeCart,
};
