import React from "react";

function LocationInfoBox({ info }) {
  return (
    <div className="location-info">
      <h2>Brewery Info</h2>
      <ul>
        <li>
          NAME: <strong>{info.name}</strong>
        </li>
        <li>
          Street: <strong>{info.street}</strong>
        </li>
        <li>
          Street: <strong>{info.city}</strong>
        </li>
        <li>
          Street: <strong>{info.state}</strong>
        </li>
        <li>
          Street: <strong>{info.postal}</strong>
        </li>
        <li>
          Street: <strong>{info.country}</strong>
        </li>
        <li>
          Street: <strong>{info.phone}</strong>
        </li>
        <li>
          Street: <strong>{info.website}</strong>
        </li>
      </ul>
    </div>
  );
}

export default LocationInfoBox;
