function List1({cars}) {

    return (
        <div class="lc">
            {/* <button className="a" onClick={()=>setShow(s => !s)}>Show</button> */}
            <div class="list">
            {
                cars.map(car => <div key={car.id}>{car.type}</div>)
            }
            </div>
            <div class="list">
            {
                cars.map(car => <div key={car.id}>{car.type} <code>{car.price} EUR</code></div>)
            }
            </div>
            <div class="list">
            {
                cars.filter(car => car.type === 'MB').map(car => <div key={car.id}>{car.type} <code>{car.price} EUR</code></div>)
            }
            </div>
            <div class="list">
            {
                cars.map(car => <div key={car.id}>{car.type} <code>{car.price} EUR</code> {car.price < 10000 ? <i>Akcija!</i> : null}</div>)
            }
            </div>
            <div class="list">
            {
                cars.map(car => <div key={car.id}><span style={{color:car.color}}>{car.type}</span> <code>{car.price} EUR</code> {car.price < 10000 ? <i>Akcija!</i> : null}</div>)
            }
            </div>
        </div>
    );
}

export default List1;