import * as React from 'react';
// import 'rxjs/add/operator/map';
import styled from 'styled-components';

import { TEMPORARY_KEY as GOOGLE_API_KEY } from 'Shared/constants';

type MapContainerProps = {
  map?: object
};

const WrapperMap = styled.div`
    border:1px solid black;
    height: 20px;
`;


export class MapContainer extends React.PureComponent<MapContainerProps> {
    // private map = React.createRef<HTMLDivElement>()
    // private current = true
    // get myValue (): boolean { return this.current }
    
    state = {
      mapIsReady: false
    }

    componentDidMount() {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', () => {
        this.setState({ mapIsReady: true });
      });

      document.body.appendChild(script);
    }

    componentDidUpdate() {
      if (this.state.mapIsReady) {
        this.map = new google.maps.Map(
          document.getElementById("map"),
          {
            center: {lat: -34.397, lng: 150.644},
            zoom: 12,
            // mapTypeId: 'roadmap',
          }
        )
      }
    }

    handleClick = () => {
        console.log('eccomi')
    }
    
    render() {
        return (
            <div>
                <WrapperMap>
                    <div id="map" onClick={this.handleClick}>
                        coraggio
                    </div>
                </WrapperMap>
            </div>
        );
    }
};

export default MapContainer;
