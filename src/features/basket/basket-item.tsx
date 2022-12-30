import { Product } from './mock-product-type';

export const BasketItem = ({}: // id,
// title,
// description,
// price,
// discountPercentage,
// rating,
// stock,
// brand,
// category,
// thumbnail,
// images,
// amount,
// index
Product & { amount: number; index: number }) => {
  return <div></div>;
};
