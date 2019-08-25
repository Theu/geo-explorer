import * as React from 'react';
import MapHolder from './MapHolder';
import { MapHolderProps } from './MapHolder';


export const App: React.FunctionComponent<MapHolderProps> = (props) => 
{
    
    const { compiler, framework } = props;
    return (
        <MapHolder
            compiler={compiler} 
            framework={framework}    
        />
)};

export default App;
