import when from "when";
import GoogleMaps from "gmaps";
import GoogleMapsMap from "gmaps.core";

export default {

  createMap( targetEl ) {
    return new GoogleMapsMap( { el: targetEl } );
  },

  geoLocate() {
    return when.promise( ( resolve, reject, notify ) => {
      GoogleMaps.geolocate( {
        success( position ) {
          return resolve( position )
        },
        error( err ) {
          return reject( err );
        },
        not_supported() {
          return reject( { message: "GeoLocation not supported" } );
        }
      } );
    } );
  }

};
