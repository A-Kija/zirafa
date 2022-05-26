function Hello({red, africa, makeGreen}) {

    return (
        <>
        <h3 style={{color:red}}>Hello {africa}</h3>
        <button className="a" onClick={makeGreen}>GREEN</button>
        </>
    );
}

export default Hello;