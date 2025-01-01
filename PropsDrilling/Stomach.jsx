import { nameContext } from "./Subfile"
import { useContext } from "react";

    const Stomach = () => {
        let dog = useContext(nameContext);
    return (
        <div>
            <h1>Stomach : {dog}</h1>
        </div>
    )
    }
export default Stomach