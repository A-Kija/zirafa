function Button({clickButton, clickPlus, clickRed, clickAddSrs, clickRemSrs}) {

    return (
        <>
        <button onClick={clickButton}>Make pink</button>
        <button onClick={clickPlus}>Plus</button>
        <button onClick={clickRed}>Ja ja RED</button>
        <button onClick={clickAddSrs}>Add []</button>
        <button onClick={clickRemSrs}>Remove []</button>
        
        </>
    )
    
}

export default Button;