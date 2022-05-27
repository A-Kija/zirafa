function Car1({ car }) {

    return (
        <div>
            <span>{car.type}</span>
            <code>{car.price} EUR</code>
        </div>
    )
}

export default Car1;