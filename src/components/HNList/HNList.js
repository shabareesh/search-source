import React from 'react';
import './hnList.scss';
import HNListItem from './HNListItem';

const HNList = ({ data: { hits } }) => (
  <div className="hn-list-container">
    {hits.map(e => (
      <HNListItem key={e.objectID} title={e.title} url={e.url} author={e.author} />
    ))}
  </div>
);

export default HNList;
