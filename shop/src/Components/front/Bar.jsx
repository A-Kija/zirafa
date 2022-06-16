import { useContext, useEffect, useState, useRef } from "react";
import { filterPrice, filterShowPhoto, sortProducts } from "../../Actions/products";
import FrontContext from "../../Contexts/FrontContext";

function Bar() {

    const [select, setSelect] = useState('default_sort');

    const [showPhoto, setShowPhoto] = useState(false);

    const {dp, min, max} = useContext(FrontContext);

    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(0);

    const run1 = useRef(true);
    const run2 = useRef(true);
    const run3 = useRef(true);

    useEffect(() => {
        if (run1.current) {
            run1.current = false;
            return;
        }
        dp(sortProducts(select));
    }, [select, dp]);

    useEffect(() => {
        if (run2.current) {
            run2.current = false;
            return;
        }
        dp(filterPrice({min: minRange, max: maxRange}));
    }, [minRange, maxRange, dp]);

    useEffect(() => {
        if (run3.current) {
            run3.current = false;
            return;
        }
        dp(filterShowPhoto(showPhoto));
    }, [showPhoto, dp]);
    

    return (
        <div className="bar">
            <div className="sort">
                <span>Rūšiuoti pagal:</span>
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="default_sort">Numatytasis</option>
                    <option value="price_asc_sort">Kaina nuo mažiausios</option>
                    <option value="price_desc_sort">Kaina nuo didžiausios</option>
                    <option value="title_sort">Pagal pavadimą</option>
                </select>
            </div>
            <div className="sort">
                <span>Filtruoti pagal:</span>
                <div>
                <div className="range"><i>min: {minRange}</i> <b>{min}</b>
                <input type="range" value={minRange} min={min} max={max} onChange={e => setMinRange(e.target.value)}/>
                <b>{max}</b></div>
                <div className="range"><i>max: {maxRange}</i> <b>{max}</b>
                <input type="range" className="max" value={maxRange} min={min} max={max} onChange={e => setMaxRange(e.target.value)}/>
                <b>{min}</b></div>
                </div>
            </div>
            <div className="sort">
                <span>Tik su nuotraukom: </span>
                <input type="checkbox" onChange={() => setShowPhoto(p => !p)} checked={showPhoto} />
            </div>
        </div>
    );
}

export default Bar;