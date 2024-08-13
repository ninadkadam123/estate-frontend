import React from 'react';
import './ListPage.css';
import Map from '../../components/Map/Map';
import { listData } from '../../components/lib/dummydata';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';

export default function ListPage() {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}
