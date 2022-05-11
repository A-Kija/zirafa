function Rainbow(props) {

    return (
        <div>

        { 
            props.colors.map((c, i) => <div key={i} className="rcolor" style={{backgroundColor: c.color}}></div>) 
        }

        </div>
    )

}

export default Rainbow;