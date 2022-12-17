import DSlider from '../../shared/ui/dual-slider';
import SelectList from '../../shared/ui/select-list';
import ResetFilter from './reset-filter';

const FilterItems = () => {
  return (
    <div className="filter-items">
      <ResetFilter />
      <div className="filter-price">
        <DSlider />
      </div>
      <div className="filter-category">
        <SelectList />
      </div>
      <div className="filter-stock">
        <DSlider />
      </div>
      <div className="filer-brand">
        <SelectList />
      </div>
    </div>
  );
};

export default FilterItems;
