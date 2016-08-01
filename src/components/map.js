import React, { Component } from 'react';
import {
  GoogleMapLoader,
  GoogleMap,
  Marker
} from 'react-google-maps';

export default function Map (props) {
  return (
    <div style={{height: '200px'}}>
      <GoogleMapLoader
        containerElement={
          <div style={{height: '100%'}} />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{
              lat: props.lat,
              lng: props.lng
            }}
          />
        }
      />
    </div>
  );
}
