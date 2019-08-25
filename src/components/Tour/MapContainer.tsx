import * as React from 'react';
import styled from 'styled-components';

const WrapperMap = styled.div`
    border:1px solid black;
`;


export const MapContainer: React.FC<{}> = (props) => {
    
    return (
        <WrapperMap>
            In this tour we will visit the four conrers around my building
        </WrapperMap>
    );
}

export default MapContainer;