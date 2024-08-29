import React from 'react';
import './List.css';

import Card from '../Card/Card';
export default function List({ posts }) {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
