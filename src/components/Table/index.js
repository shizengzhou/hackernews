import React from 'react';
import Button from '../Button';

const Table = ({ list, onDismiss }) => (
  <div className="table">
    {list.map(item => (
      <div className="table-row" key={item.objectID}>
        <span style={{ width: '40%' }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>{item.author}</span>
        <span style={{ width: '10%'}}>{item.num_comments}</span>
        <span style={{ width: '10%'}}>{item.points}</span>
        <span style={{ width: '10%'}}>
          <Button
            className="button-inline"
            onClick={() => onDismiss(item.objectID)}
          >
            Dismiss
          </Button>
        </span>
      </div>
    ))}
  </div>
);

export default Table;