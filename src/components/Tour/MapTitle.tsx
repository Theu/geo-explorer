import * as React from 'react';
import styled from 'styled-components';

export interface MapTitle {
    tourTitle: string;
}

const Wrapper = styled.div`
    text-align: center;
    font-size: 3em;
    margin: 10px 0;
`;


export const MapTitle: React.FC<{}> = (props) => {
    const tourTitle = 'Mock';
    
    return (
        <Wrapper>
            This is the tour of {tourTitle}
        </Wrapper>
    );
}

export default MapTitle;
