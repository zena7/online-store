import Header from '../widgets/header';
import Aside from '../widgets/aside';
import SortItems from '../features/sort/sort-items';
import Found from '../features/found/found';
import ViewSwitcher from '../shared/ui/view-switcher';
import Items from '../widgets/items';
import Footer from '../widgets/footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="main-wrapper">
        <Aside />
        <div className="bar-items-wrapper">
          <div className="pre-items-bar">
            <Found />
            <SortItems />
            <ViewSwitcher />
          </div>
          <Items />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
