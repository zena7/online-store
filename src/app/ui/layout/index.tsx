import './layout.css';
import Header from './header/header';
import Main from './main/main';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';

export const Layout = () => {
  return (
    <div id="layout">
      <Header />
      <div id="main-wrapper">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
};
