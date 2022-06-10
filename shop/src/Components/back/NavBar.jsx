function NavBar() {

    return (
        <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand"  href="/">BiG Shop</a>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="/">Home</a>
                    <a className="nav-link" href="/">Features</a>
                    <a className="nav-link" href="/">Pricing</a>
                    <a className="nav-link disabled"  href="/">Disabled</a>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;