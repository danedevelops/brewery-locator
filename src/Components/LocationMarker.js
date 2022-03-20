import React from "react";
import { Icon } from "@iconify/react";
import beerMug from "@iconify/icons-emojione/beer-mug";
import volcanoIcon from "@iconify/icons-emojione/volcano";
import stormIcon from "@iconify/icons-emojione/cloud-with-lightning-and-rain";
import iceIcon from "@iconify/icons-emojione/snowflake";

function LocationMarker({ lat, lng, onClick, id }) {
  let renderIcon = null;
  if (id === "micro") {
    renderIcon = beerMug;
  } else if (id !== "micro") {
    renderIcon = beerMug;
  }
  // } else if (id === 12) {
  //   renderIcon = volcanoIcon;
  // } else if (id === 15) {
  //   renderIcon = iceIcon;
  // }

  return (
    <div onClick={onClick}>
      <Icon icon={renderIcon} className="location-icon" />
    </div>
  );
}

export default LocationMarker;
