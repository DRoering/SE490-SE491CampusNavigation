import { Building } from "..";

interface LaunchBrowserProps {
  destination: Building;
  userLocation: L.LatLng;
}

export const BrowserNavigate = (props: LaunchBrowserProps) =>
  window.open(
    encodeURI(
      `http://google.com/maps/dir/?api=1&destination=${props.destination.name}`
    )
  );
