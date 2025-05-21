import ProductTable from "../features/ProductTable";
import SearchBar from "../features/SearchBar";
export const FilterableTab = () => {
  return (
    <div className="productTab">
      <SearchBar />
      <ProductTable />
    </div>
  );
};
