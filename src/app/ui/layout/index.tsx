import './layout.css';
import { Header } from '../header';
import { Main } from '../main';
import { Sidebar } from '../sidebar';
import { Footer } from '../footer';

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
