import React from 'react';
import { SearchWrapper, Input, Select } from './SearchFilter.styles';
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory, setSort } from "../../features/filters/filtersSlice";
import { useDebounce } from "../../hooks/useDebounce";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const { search, category, sort } = useSelector((state) => state.filters);
  const debouncedSearch = useDebounce(search);

  React.useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <SearchWrapper>     
      <Input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}/>
    
      <Select value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
      </Select>
    
      <Select value={sort} onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="none">Sort by price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </Select>
    </SearchWrapper>
  );
};

export default SearchFilter;
