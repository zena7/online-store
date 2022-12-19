import { Header } from '../header';
import { Container } from '../../../shared/ui/container';
import { Sidebar } from '../sidebar';
import { Main } from '../main';
import { Footer } from '../footer';
import './layout.css';

export const Layout = () => {
  return (
    <div data-layout="grid">
      <Header />
      <Container dataLayout="content">
        <Sidebar />
        <Main />
      </Container>
      <Footer />
    </div>
  );
};
