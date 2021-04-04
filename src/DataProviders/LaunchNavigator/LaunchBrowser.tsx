import { Item } from "../../Reuseable";

export const BrowserNavigate = (destination: Item) =>
  window.open(
    encodeURI(
      `http://google.com/maps/dir/?api=1&destination=${destination.name}`
    )
  );
