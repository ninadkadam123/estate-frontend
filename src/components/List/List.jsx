import React from 'react';
import './List.css';
import { listData } from '../../components/lib/dummydata';
import Card from '../Card/Card';
export default function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
