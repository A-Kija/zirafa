import { Link, Outlet } from "react-router-dom";
function Cat() {

    return (
        <>
            <h1>Cat</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="links">
                            <Link to="red">Red Circle</Link>
                            <Link to="blue">Blue Circle</Link>
                            <Link to="black">Black Circle</Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="kvc">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cat;