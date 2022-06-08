import React from "react";

import {MapContainer, CircleMarker, TileLayer, Popup} from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';

import mapData from './geoJSON/bedrijven_normal_json.json'

import './MyMap.css';


class MyMap extends React.Component {
    state = {}

    mapCenter = [51.44402355, 5.472920898];

    render() {
        return (
            <MapContainer
            center={this.mapCenter}
            zoom={12}
            style={{width: '100%', height: '100%'}}
          >
            {mapData.map(bedrijf =>{
                if(bedrijf.status === "onbekend"){
                    return <CircleMarker
                        key={bedrijf.mil_locationname} 
                        radius={3} 
                        center={[bedrijf.latitude, bedrijf.longitude]}
                        color={"black"}
                        weight={1}
                        fillColor={"yellow"}
                        fillOpacity={1}
                        >
                            <Popup>
                                <h2 className="popup_heading">{bedrijf.mil_locationname}</h2>
                                <button className="popup__button" onClick={() => {this.props.setBedrijf(bedrijf.unique_id); this.props.showPage("bedrijf")}}>Naar bedrijf</button>
                            </Popup>
                        </CircleMarker>
                }
                return <CircleMarker
                 key={bedrijf.mil_locationname} 
                 radius={3} 
                 center={[bedrijf.latitude, bedrijf.longitude]}
                 color={"black"}
                 weight={1}
                 fillColor={"blue"}
                 fillOpacity={1}
                 >
                 <Popup>
                     <h2 className="popup_heading">{bedrijf.mil_locationname}</h2>
                     <button className="popup__button" onClick={() => {this.props.setBedrijf(bedrijf.unique_id); this.props.showPage("bedrijf")}}>Naar bedrijf</button>
                 </Popup>
                 </CircleMarker>
            })}
          
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmllbHNkb2JiZWxhYXIiLCJhIjoiY2wxMjN4anhjMDJvYjNlcGR3ZDVwN2RhbiJ9.M3p510hqjAir3XSYRvPqsQ"
            maxZoom={20}
          >
          </TileLayer>
          </MapContainer>
        );
    }
}

export default MyMap;