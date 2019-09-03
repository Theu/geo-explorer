import * as React from 'react';

import MapTitle from './MapTitle';
import MapText from './MapText';
import MapContainer from './MapContainer';

export const Tour: React.FC = (props) => (
    <React.Fragment>
        <MapTitle />
        <MapText />
        <MapContainer />
    </React.Fragment>
);

export default Tour;
