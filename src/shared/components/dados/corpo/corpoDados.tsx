import { Cloud } from "../templetes/Cloud"
import { Ibm } from "../templetes/Ibm"
import { Microsoft } from "../templetes/Microsoft"
import { Robot } from "../templetes/Robot"
import { Tableau } from "../templetes/Tableau"


export const CorpoDados = () => {
    return (
        <>
            <Cloud/>
            <Ibm/>
            <Microsoft/>
            <Robot/>
            <Tableau/>
        </>
        
        
    )
}