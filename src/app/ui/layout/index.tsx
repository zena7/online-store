import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Container } from '@/shared/ui/container';
import { Footer } from '../footer';
import './layout.css';

const Root = () => {
  return (
    <div data-layout="grid">
      <Header />
      <Container dataLayout="content">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
