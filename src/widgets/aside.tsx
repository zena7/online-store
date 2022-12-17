import ResetFilter from '../features/filter/reset-filter';
import FilterItems from '../features/filter/filter-items';

const Aside = () => {
  return (
    <aside id="aside-filter">
      <ResetFilter />
      <FilterItems />
    </aside>
  );
};

export default Aside;
