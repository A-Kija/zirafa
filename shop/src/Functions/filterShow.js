function filterShow(show) {
    for (const property in show) {
        if (!show[property]) {
            return false;
        }
      }
    return true;
}

export default filterShow;