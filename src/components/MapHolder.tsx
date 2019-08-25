import * as React from 'react';
import styled from 'styled-components';

export interface MapHolderProps {
    compiler: string;
    framework: string;
}

const Wrapper = styled.div`
    border: 1px solid red;
`;


export const MapHolder: React.FC<MapHolderProps> = (props) => {
    // const { compiler, framework } = props;
    const compiler = 'typescript';
    const framework = 'React';
    return (
        <Wrapper>
            <h1>Hello from {compiler} and {framework}</h1>
        </Wrapper>
    );
}

export default MapHolder;
