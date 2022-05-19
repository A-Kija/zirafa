import { useEffect, useState } from "react";

function Square({i}) {

    const [yes, setYes] = useState(true);

    const [index, setIndex] = useState('-');


    useEffect(() => {
        console.log('gime');
        // return () => console.log('numiro'); // pasileidzia kai komponentas pasalinamas is domo
    }, [yes]); // pasileidzia tik kai komponentas yra sukuriamas


    useEffect(() => {
        setIndex(i);
    }, [i]);



    return (
        <div className="small-red-square" onClick={() => setYes(y => !y)}>
            {index}
        </div>
    )
}

export default Square;