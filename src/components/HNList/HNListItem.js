import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authorState, fetchAuthor } from './hnSlice';

const HNListItem = ({ url, title, author }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(authorState);

  useEffect(() => {
    dispatch(fetchAuthor(author));
  }, [author, dispatch]);

  return (
    <div className="hn-list">
      <a className="hn-list--title" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      <div className="hn-list--author">{author}</div>
    </div>
  )
};

export default HNListItem;
