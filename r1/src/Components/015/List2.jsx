import Car1 from "./Car1";
import Car2 from "./Car2";

function List2({cars}) {

    return (
        <div class="lc">
            <div class="list">
            {
                cars.map(car => <Car1 key={car.id} car={car}></Car1>)
            }
            </div>
            <div class="list">
            {
                cars.map(car => <Car2 key={car.id} car={car}></Car2>)
            }
            </div>
        </div>
    );
}

export default List2;