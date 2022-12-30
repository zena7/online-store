// import { useState, useEffect } from 'react';
// import { selectAll } from './selectors';
// import { Product } from './mock-product-type';
// import { RootState } from '../../shared/store';
// import { useSelector } from 'react-redux';
// import { BasketItem } from './basket-item';

// export const BasketList = () => {
//   const [products, setProducts] = useState<(Product & { amount: number })[]>(
//     useSelector<RootState, (Product & { amount: number })[]>(selectAll),
//   );

//   return (
//     <List>
//       {products.map((product, i) => (
//         <li key={product.id}>
//           <BasketItem {...{ ...product, index: i }} />
//         </li>
//       ))}
//     </List>
//   );
// };

function DeleteCont() {
  return <></>;
}

export default DeleteCont;
