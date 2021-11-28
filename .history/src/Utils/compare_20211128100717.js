function compare(a, b, fieldName) {
    if (a[fieldName] < b[fieldName]) {
        return -1;
    }
    if (a[fieldName] > b[fieldName]) {
        return 1;
    }
    return 0;
}

export default compare;