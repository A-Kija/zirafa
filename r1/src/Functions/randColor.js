function randColor(h = true) {
    return (h ? '#' : '') + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

export default randColor;