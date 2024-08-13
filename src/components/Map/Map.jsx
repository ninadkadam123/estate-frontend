import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import Pin from '../Pin/Pin';

// const position = [19.2094, 73.093948];
export default function Map({ items }) {
  return (
    <MapContainer
      center={[51.5074, -0.1278]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}
