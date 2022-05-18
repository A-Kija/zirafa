function Square({which}) {

    return (
        <div className={'small-red-square ' + 'c' + which%2 }>

        </div>
    )
}

export default Square;