import { useEffect, useState } from "react";

function Square({i}) {


    const [yes, setYes] = useState(true);

    useEffect(() => {
        console.log('gime');
        // return () => console.log('numiro'); // pasileidzia kai komponentas pasalinamas is domo
    }, [yes]); // pasileidzia tik kai komponentas yra sukuriamas




    return (
        <div className="small-red-square" onClick={() => setYes(y => !y)}>

        </div>
    )
}

export default Square;