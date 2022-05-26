import { useState } from "react";

function Lists() {

    const sizes = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL'
    ];

    const [show, setShow] = useState(false);

    return (
        <div class="lc">
            <button className="a" onClick={()=>setShow(s => !s)}>Show</button>
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
            <div class="list">
            {
                sizes.map((s, i)=> (
                    i % 2 ? <div key={i} style={{color:'yellow'}}><i>{s}</i></div>:
                    <div key={i} style={{color:'red'}}><u>{s}</u></div>
                    )
                )
            }
            </div>
            <div class="list">
            {
                sizes.filter(s => s[0]==='X').map((s, i)=><div key={i}>{s}</div>)
            }
            </div>
            <div class="list">
            {
                sizes.sort((a, b) => b.length - a.length).map((s, i)=><div key={i}>{s}</div>)
            }
            </div>
            <div class="list">
            {
                sizes.filter(_ => show).map((s, i)=><div key={i}>{s}</div>)
            }
            </div>
        </div>
    );
}

export default Lists;