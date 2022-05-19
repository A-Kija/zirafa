import { useEffect } from "react";

function Square({i}) {


    useEffect(() => {
        console.log('gime');
        return () => console.log('numiro'); // pasileidzia kai komponentas pasalinamas is domo
    }, []); // pasileidzia tik kai komponentas yra sukuriamas




    return (
        <div className="small-red-square">

        </div>
    )
}

export default Square;