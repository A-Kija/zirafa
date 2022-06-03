import { useParams } from "react-router-dom";

function Cuckoo() {

    const {id, color} = useParams();

    return (
        <>
        <h1 style={{color: '#' + color}}>Cuckoo No: {id}</h1>
        </>
    )
}

export default Cuckoo;