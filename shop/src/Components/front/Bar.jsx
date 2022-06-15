import { useCallback, useContext, useEffect, useState } from "react";
import { sortProducts } from "../../Actions/products";
import FrontContext from "../../Contexts/FrontContext";

function Bar() {

    const [select, setSelect] = useState('default_sort');

    const {dp} = useContext(FrontContext);

    const sort = useCallback(sortType => {
        dp(sortProducts(sortType))
    }, [dp]);

    useEffect(() => {
        sort(select);
    }, [select, sort]);

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
        </div>
    );
}

export default Bar;