import { Icon } from "@iconify/react";
import beerMug from "@iconify/icons-emojione/beer-mug";

function Header(props) {
  return (
    <div className="header-bar">
      <Icon icon={beerMug} /> Brewery Locator
    </div>
  );
}

export default Header;
