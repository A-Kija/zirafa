// import { useState } from 'react';

function Car2({ car, setShowCar, activeCar, setActiveCar }) {

    // const [active, setActive] = useState(false);

    const select = selectedCar => {
        // setActive(a => !a);
        setShowCar(selectedCar);
        setActiveCar(selectedCar.id);
    }


    return (
        <div onClick={() => select(car)} style={{backgroundColor: activeCar === car.id ? 'skyblue' : null}}>
            <span>{car.type}</span>
            <code>{car.price} EUR</code>
        </div>
    )
}

export default Car2;