function Button({clickButton, clickPlus, clickRed}) {

    return (
        <>
        <button onClick={clickButton}>Make pink</button>
        <button onClick={clickPlus}>Plus</button>
        <button onClick={clickRed}>Ja ja RED</button>
        </>
    )
    
}

export default Button;