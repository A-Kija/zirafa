import Car1 from "./Car1";
import Car2 from "./Car2";

function List2({cars, setShowCar, activeCar, setActiveCar}) {

    return (
        <div className="lc">
            <div className="list">
            {
                cars.map(car => <Car1 key={car.id} car={car}></Car1>)
            }
            </div>
            <div className="list">
            {
                cars.map(car => <Car2 key={car.id} car={car} setShowCar={setShowCar} activeCar={activeCar} setActiveCar={setActiveCar}></Car2>)
            }
            </div>
        </div>
    );
}

export default List2;