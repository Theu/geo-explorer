import * as React from 'react';
import styled from 'styled-components';

const WrapperText = styled.div`
    margin-top: 10px;
    margin-bottom: 25px;
`;


export const MapText: React.FC<{}> = (props) => {
    
    return (
        <WrapperText>
            In this tour we will visit the four conrers around my building
        </WrapperText>
    );
}

export default MapText;
