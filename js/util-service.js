function getFromStorage(key) {
    var val = localStorage.getItem(key);
    return JSON.parse(val)
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function getTimeStr(timestamp) {
    var time = new Date(timestamp);
    var year = time.getFullYear();
    var day = time.getDate();
    var month = time.getMonth() + 1;

    var hour = time.getHours();
    var minutes = time.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var str = `${hour}:${minutes} , ${day}/${month}/${year}`;
    return str;
}



