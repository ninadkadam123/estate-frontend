import React from 'react';
import './Pin.css';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: '/placeholder.png', // URL to the custom icon image
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point of the icon
});

export default function Pin({ item }) {
  return (
    <Marker
      position={[item.latitude, item.longitude]}
      icon={customIcon}
    >
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
