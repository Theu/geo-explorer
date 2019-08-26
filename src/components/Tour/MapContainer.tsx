import * as React from 'react';
import styled from 'styled-components';

import { 
    TEMPORARY_KEY as apiKey,
    SECOND_TEST } from 'Shared/constants';

const WrapperMap = styled.div`
    border:1px solid black;
`;


export const MapContainer: React.FC<{}> = (props) => {
    console.log('SECOND_TEST', SECOND_TEST)
    return (
        <WrapperMap>
            In this tour we will visit the four conrers around my building
        </WrapperMap>
    );
}

export default MapContainer;