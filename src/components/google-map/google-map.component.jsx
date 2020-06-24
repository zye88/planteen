import React, {Component, createRef} from 'react';

class GoogleMap extends Component {
    googleMapRef = createRef();

  componentDidMount() {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`
    document.body.appendChild(googleScript);

    googleScript.addEventListener('load', () => {
        this.googleMap = this.createGoogleMap();
        this.marker = this.createMarker();
    });
  }

  createGoogleMap = () => 
    new window.google.maps.Map(this.googleMapRef.current, {
        zoom: 17,
        center: { lat: 43.641862, lng: -79.401674 },
    });
    
  createMarker = () => 
    new window.google.maps.Marker({
        position: { lat: 43.641862, lng: -79.401674 },
        map: this.googleMap
    });

  render() {
    return (
      <div
        ref={this.googleMapRef}
        style={{ width: '300px', height: '400px' }}
      />);
  }
}

export default GoogleMap;