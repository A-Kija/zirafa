import Car1 from "./Car1";

function List2({cars}) {

    return (
        <div class="lc">
            <div class="list">
            {
                cars.map(car => <Car1 key={car.id} car={car}></Car1>)
            }
            </div>
        </div>
    );
}

export default List2;