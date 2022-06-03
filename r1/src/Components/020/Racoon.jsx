import { useParams } from "react-router-dom";

function Racoon() {

    const {can} = useParams();

    return (
        <>
        <h1>Racoon with can No {can}</h1>
        </>
    )
}

export default Racoon;