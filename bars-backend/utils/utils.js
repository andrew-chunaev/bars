exports.wrappedJoin = (array) => {
    var values = array.map((value) => {
        // Wrap each string of the array with quotes
        if (typeof value === 'string') {    
            return "'" + value + "'";
        } else {
            return value;
        }
    }).join(",");
    return values;
}

exports.wrappedEntries = (entries) => {
    var array=[];
    for (let [key, value] of entries) {
        array.push(key + '=' + (typeof value === 'string' ? "'" + value + "'" : value));
    }
    return array.join(",");
}
