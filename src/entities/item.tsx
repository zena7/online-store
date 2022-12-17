import AddToCart from '../features/cart/add-to-cart';
import ShowDetails from '../features/item/show-details';

const Item = () => {
  return (
    <div className="item">
      <AddToCart />
      <ShowDetails />
    </div>
  );
};

export default Item;
