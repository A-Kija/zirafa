function Lists() {

    const sizes = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL'
    ];

    return (
        <div class="lc">
            <div class="list">
            {
                sizes.map((s, i)=><div key={i}>{s}</div>)
            }
            </div>
            <div class="list">
            {
                sizes.map((s, i)=> (
                    i % 2 ? <div key={i} style={{color:'yellow'}}>{s}</div>:
                    <div key={i} style={{color:'red'}}>{s}</div>
                    )
                )
            }
            </div>
        </div>
    );
}

export default Lists;