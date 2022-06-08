import React from "react";
import NavBar from './components/navbar/NavBar.js';
import './components/navbar/NavBar.css';


import {MapContainer, CircleMarker, TileLayer, Popup} from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';

import mapData from './geoJSON/bedrijven_normal_json.json'

import './MyMap.css';


class MyMap extends React.Component {
    state = {}

    mapCenter = [51.44402355, 5.472920898];

    render() {
        return (
            <div className="MyMap">
                <NavBar></NavBar>
                <MapContainer
            center={this.mapCenter}
            zoom={12}
            style={{width: '100%', height: '100%'}}
            >
            {mapData.map(bedrijf =>{
                if(bedrijf.status === "onbekend"){
                    return <CircleMarker
                        key={bedrijf.mil_locationname} 
                        radius={5} 
                        center={[bedrijf.latitude, bedrijf.longitude]}
                        color={"#CFF6FF"}
                        weight={1}
                        fillColor={"#56C1FE"}
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
                    radius={5} 
                    center={[bedrijf.latitude, bedrijf.longitude]}
                    color={"#CFD1FF"}
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
            url="https://api.mapbox.com/styles/v1/v1nh/cl337zqe5004h15qf77944jkd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidjFuaCIsImEiOiJjbDMzN25lbGUwMDV4M2ltdWxlc2hhbm13In0.eHbrg6KBHEbBUxOvvvTpsQ"
            maxZoom={20}
            >
            </TileLayer>
                </MapContainer>
            </div>
        );
    }
}

export default MyMap;