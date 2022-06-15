function Bar() {

    return (
        <div className="bar">
            <div className="sort">
                <select>
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