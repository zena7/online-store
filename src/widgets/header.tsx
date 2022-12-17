import TotalContent from '../features/cart/total-content';
import TotalPrice from '../features/cart/total-price';
import Search from '../features/search/search';

const Header = () => {
  return (
    <header id="header">
      <div className="logo-wrapper">
        <img src="" alt="" className="img-logo" />
      </div>
      <Search />
      <TotalPrice />
      <div className="btn-cart">
        <TotalContent />
      </div>
    </header>
  );
};

export default Header;
