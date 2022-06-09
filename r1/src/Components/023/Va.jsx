import { useContext } from "react";
import Number3 from "./Number3";
import Number5 from "./Number5";

function Va({ number }) {

    const { number3, number7 } = useContext(Number3);

    return (
        <>
            <h2>{number}</h2>
            <Number5.Consumer>
                {
                    value => <h2>{value}</h2>
                }
            </Number5.Consumer>
            <h2>3: {number3}</h2>
            <h2>7: {number7}</h2>


        </>
    );
}

export default Va;