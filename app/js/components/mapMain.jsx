import React, { Component } from 'react';
import { Map, GeoJson, TileLayer } from 'react-leaflet';

// const myGeoJsonURL = 'https://raw.githubusercontent.com/daveism/cr-quick/gh-pages/data/swir_areas.geojson'


export default class SimpleExample extends Component {
  constructor() {
    super();
    this.state = {
      lat: 35.6683,
      lng: -80.4786,
      zoom: 7,
    };
    this.data = {};
  }


  componentDidMount() {
    const self = this;

    $.getJSON({
      url: 'https://raw.githubusercontent.com/daveism/cr-quick/gh-pages/data/swir_areas.geojson',
    })
    .success(function(data) {
      console.log(data);
      self.setState({
        data: data,
      });
    })
    .error(function() {
      throw new Error('Server response failed.');
    });
  }
  // getInitialState() {
  //    return {data: []};
  //  }
  //afer TileLayer
  //            <GeoJson data={data} />




  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="column">
        <div className="ui raised padded segment">
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
              url='http://api.tiles.mapbox.com/v3/daveism.oo0p88l4/{z}/{x}/{y}.png'
            />
             <GeoJson data={this.data} />
          </Map>
        </div>
      </div>
    );
  }
}
