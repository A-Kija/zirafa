import { useContext } from "react";
import Number3 from "./Number3";

function Va({number}) {

    const number3 = useContext(Number3);

    return (
        <>
            <h2>{number}</h2>
            <h2>{number3}</h2>
        </>
    );
}

export default Va;