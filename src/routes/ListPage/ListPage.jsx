import React, { Suspense } from 'react';
import './ListPage.css';
import Map from '../../components/Map/Map';

import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import { Await, useLoaderData } from 'react-router-dom';

export default function ListPage() {
  const data = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading....</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading post.... </p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<p>Loading....</p>}>
        <Await
          resolve={data.postResponse}
          errorElement={<p>Error loading post.... </p>}
        >
          {(postResponse) => <Map items={postResponse.data} />}
        </Await>
      </Suspense>
      {/* <div className="mapContainer">
        <Map items={data} />
      </div> */}
    </div>
  );
}
