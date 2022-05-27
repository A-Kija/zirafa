function List2({cars}) {

    return (
        <div class="lc">
            <div class="list">
            {
                cars.map(car => <div key={car.id}>{car.type}</div>)
            }
            </div>
        </div>
    );
}

export default List2;