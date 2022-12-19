import './layout.css';
import { Header } from '../header/header';
import { Main } from '../main/main';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
};
