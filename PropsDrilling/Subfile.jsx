import Hen from './Hen.jsx'
import { createContext } from 'react';
export let nameContext = createContext();

function Subfile()
{
    return( 
        <nameContext.Provider value="Water">
            <Hen name="Rahul"/>
        </nameContext.Provider>
    )
}
export default Subfile