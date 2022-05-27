import { useState } from 'react';

function Car2({ car }) {

    const [active, setActive] = useState(false);

    return (
        <div onClick={() => setActive(true)} style={{backgroundColor: active ? 'skyblue' : null}}>
            <span>{car.type}</span>
            <code>{car.price} EUR</code>
        </div>
    )
}

export default Car2;