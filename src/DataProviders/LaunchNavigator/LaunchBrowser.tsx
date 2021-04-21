export const BrowserNavigate = (destination: string) =>
  window.open(
    encodeURI(`http://google.com/maps/dir/?api=1&destination=${destination}`)
  );
