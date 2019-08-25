import * as React from 'react';
import styled from 'styled-components';

import { TEST } from '../../Shared/constants';

const WrapperMap = styled.div`
    border:1px solid black;
`;


export const MapContainer: React.FC<{}> = (props) => {
    
    return (
        <WrapperMap>
            In this tour we will visit the four conrers around my building {TEST}
        </WrapperMap>
    );
}

export default MapContainer;