import { Sidebar } from '@/app/ui/sidebar';
import { Main } from '@/app/ui/main';
import { ProductList } from '@/features/product-list';

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Main>
        <ProductList />
      </Main>
    </>
  );
};

export default HomePage;
