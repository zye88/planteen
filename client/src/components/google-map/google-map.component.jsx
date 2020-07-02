import React, { createRef, useEffect } from 'react';

const GoogleMap = () => {
  const googleMapRef = createRef();
  let googleMap;

  useEffect(() => {
    const googleScript = document.createElement('script');
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDUi157ogKkqgAim3Tkt0wU3lWttlrjet0&libraries=places`
    document.body.appendChild(googleScript);

    googleScript.addEventListener('load', () => {
        googleMap = createGoogleMap();
        createMarker();
    });
  }, []);

  const createGoogleMap = () => 
    new window.google.maps.Map(googleMapRef.current, {
        zoom: 17,
        center: { lat: 43.641862, lng: -79.401674 },
    });
    
  const createMarker = () => 
    new window.google.maps.Marker({
        position: { lat: 43.641862, lng: -79.401674 },
        map: googleMap
    });

  return (
    <div
      ref={googleMapRef}
      style={{ width: '350px', height: '450px' }}
    />);
}

export default GoogleMap;