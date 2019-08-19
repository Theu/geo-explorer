import * as React from 'react';
import Hello from './Hello';
import { HelloProps } from './Hello';


export const App: React.FunctionComponent<HelloProps> = (props) => 
{
    
    const { compiler, framework } = props;
    return (
        <Hello
            compiler={compiler} 
            framework={framework}    
        />
)};

export default App;
