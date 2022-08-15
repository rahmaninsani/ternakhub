const calculateDiscount = (price, discount_percent) => {
  const discount = price * (discount_percent / 100);
  return price - discount;
};

const organizeProducts = (products) => {
  return products?.map((product) => {
    const priceAfterDiscount = calculateDiscount(product.price, product.discount_percent);

    return {
      id: product.id,
      name: product.name,
      image: product.image,
      price: Number(product.price),
      discountPercent: product.discount_percent,
      priceAfterDiscount: priceAfterDiscount,
      weight: product.weight,
      unit: product.unit,
      amountSold: product.amount_sold,
      rating: product.rating,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  });
};

const organizeProductDetail = (product) => {
  const priceAfterDiscount = calculateDiscount(product.price, product.discount_percent);

  return {
    id: product.id,
    name: product.name,
    image: product.image,
    description: product.description,
    price: Number(product.price),
    discountPercent: product.discount_percent,
    priceAfterDiscount: priceAfterDiscount,
    weight: product.weight,
    unit: product.unit,
    amountSold: product.amount_sold,
    rating: product.rating,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
};

const organizeProductReviews = (reviews) => {
  return reviews?.map((review) => {
    return {
      id: review.id,
      user: {
        id: review.user_id,
        name: review["user.name"],
      },
      rating: review.rating,
      content: review.content,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
    };
  });
};

module.exports = {
  organizeProducts,
  organizeProductDetail,
  organizeProductReviews,
};
