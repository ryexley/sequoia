import React from "react";
import ReactDOM from "react-dom";
import { EventEmitterModule as EventEmitter } from "../composers/event-emitter";
import MapsService from "../services/google-maps";

class MapViewer extends React.Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode( this );
    const map = MapsService.createMap( el );

    // console.log( "MAP", map );
    window.MAP = map;

    MapsService.geoLocate()
      .then( position => {
        console.log( "GOT POSITION", position.coords.latitude, position.coords.longitude );
        try {
          map.map.setCenter( { lat: position.coords.latitude, lng: position.coords.longitude } );
        } catch( err ) {
          console.log( "SOMETHING WENT WRONG", err );
        }
      } )
      .catch( err => {
        console.log( "GEOLOCATION FAILED", err );
      } );
  }

  render() {
    return <div id="map-viewer"></div>
  }
};

MapViewer = EventEmitter( MapViewer );

export default MapViewer;
