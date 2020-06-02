import React from 'react';
import './wikiList.scss';

const WikiList = ({ data }) => (
  <div className="wiki-list">
    <h4 className="wiki-list--title">{data[0]}</h4>
    {data[1].map((item, index) => (
      <a
        key={item}
        className="wiki-list--item"
        href={data[3][index]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item}
      </a>
    ))}
  </div>
);

export default WikiList;
