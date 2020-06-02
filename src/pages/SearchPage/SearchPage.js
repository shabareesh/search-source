import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import Dropdown from '../../components/Dropdown/Dropdown';
import { fetchSearchData, searchState, clearData } from './searchSlice';
import HNList from '../../components/HNList/HNList';
import WikiList from '../../components/WikiList/WikiList';

import './searchPage.scss';
import SearchBox from '../../components/SearchBox/SearchBox';

const SearchPage = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(searchState);

  const [searchStr, setSearchStr] = useState('');
  const [searchSrc, setSearchSrc] = useState('');

  const handleSearch = (event) => {
    setSearchStr(event.target.value);
  };

  const handleSearchSource = (event) => {
    dispatch(clearData())
    setSearchSrc(event);
  };

  const searchSourceOptions = [
    {
      label: 'Hacker News',
      value: 'Hacker News',
      url: 'https://hn.algolia.com/api/v1/search?query=',
      component: HNList,
    },
    {
      label: 'Wiki News',
      value: 'Wiki News',
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=',
      component: WikiList,
    },
  ];

  const onSearch = () => {
    dispatch(fetchSearchData(searchStr, searchSrc.url, searchStr.value));
  };

  return (
    <div className="search-page">
      <div className="search-page--actions">
        <SearchBox value={searchStr} onChange={handleSearch} />
        <Dropdown
          onChange={handleSearchSource}
          value={searchSrc}
          options={searchSourceOptions}
          placeholder="Search Source"
        />
        <button onClick={onSearch} disabled={!searchSrc}>Search</button>
      </div>
      {!isEmpty(data) ? <searchSrc.component data={data} /> : ''}
    </div>
  );
};

export default SearchPage;
