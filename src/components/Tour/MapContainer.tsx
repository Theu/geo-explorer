import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { TEMPORARY_KEY as GOOGLE_API_KEY } from 'Shared/constants';
import { scriptGenerator } from 'Shared/scriptGenerator';

interface MapContainerProps {
  map?: Object
  scriptGenerator?(): void
};

type MapContainerState = {
  mapIsReady: boolean
}


const WrapperMap = styled.div`
    width: 600px;
    height: 600px;
    overflow: visible;
    border:1px solid black;
`;

export class MapContainer extends PureComponent<MapContainerProps, MapContainerState> {
    
    
    
    state = {
      mapIsReady: false
    }
    map: google.maps.Map;
    scriptGenerator = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', () => {
        this.setState({ mapIsReady: true });
      });
  
      document.body.appendChild(script);

    }
  
    componentDidMount() {
      this.scriptGenerator();
    }

    componentDidUpdate() {
      if (this.state.mapIsReady) {
        this.map = new google.maps.Map(
          document.getElementById("map"),
          {
            center: {
              lat: 52.4919697, 
              lng: 13.4682996
            },
            zoom: 18,
            // mapTypeId: 'roadmap',
          }
        )
      }
    }

    handleClick = () => {
        console.log('eccomi')
    }
    
    render() {

      // console.log('>>>>', this.scriptGenerator())
        return (
            
            <WrapperMap id="map" onClick={this.handleClick}>
                coraggio
            </WrapperMap>
            
        );
    }
};

export default MapContainer;
