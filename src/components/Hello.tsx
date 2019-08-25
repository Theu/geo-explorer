import * as React from 'react';
import styled from 'styled-components';

export interface HelloProps {
    compiler: string;
    framework: string;
}

const Wrapper = styled.div`
    border: 1px solid red;
`;


export const Hello: React.FC<HelloProps> = (props) => {
    // const { compiler, framework } = props;
    const compiler = 'typescript';
    const framework = 'React';
    return (
        <Wrapper>
            <h1>Hello from {compiler} and {framework}</h1>
        </Wrapper>
    );
}

export default Hello;
