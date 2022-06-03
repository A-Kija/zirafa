import { Link, Outlet } from "react-router-dom";
function Troll() {

    return (
        <>
        <h1>Troll</h1>
        <div className="links">
            <Link to="green">Green Bridge</Link>
            <Link to="pink">Pink Bridge</Link>
        </div>
        <div className="kvc">
            <Outlet></Outlet>
        </div>
        </>
    )
}

export default Troll;