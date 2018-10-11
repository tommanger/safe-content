'use-strict';
const USER_KEY = 'users';
var gUsers = createUsers()

function createUsers() {
    var usersFromStorage = getFromStorage(USER_KEY);
    return usersFromStorage ? usersFromStorage : [{
        userName: 'tom',
        password: '123',
        isAdmin: true,
        lastLogin: null
    }, {
        userName: 'ccc',
        password: '123',
        isAdmin: true,
        lastLogin: null
    }, {
        userName: 'bbb',
        password: '123',
        isAdmin: true,
        lastLogin: null
    }, {
        userName: 'aaa',
        password: '123',
        isAdmin: true,
        lastLogin: null
    }];
}

function checkUserLogin(userName, password) {
    var loggedinUser = gUsers.find(function (user) {
        return userName === user.userName &&
            password === user.password;
    });
    if (loggedinUser) {
        loggedinUser.lastLogin = Date.now();

        saveToStorage(USER_KEY, gUsers)
        saveToStorage('loggedinUser', loggedinUser)
        return loggedinUser;
    }
    return null;
}


function getUsers() {
    return getFromStorage(USER_KEY);
}


function goToMain() {
    window.location.href = "main.html"
}



function setSort(statusSort) {
    switch (statusSort) {
        case 'name':
        gUsers.sort(sortTxt);
            break;
        case 'last-login':
        gUsers.sort(sortTime);
            break;
    }
    saveToStorage(USER_KEY, gUsers);
}

function sortTxt(a,b){
    
    if(a.userName.toLowerCase() < b.userName.toLowerCase()) return -1;
    if(a.userName.toLowerCase() > b.userName.toLowerCase()) return 1;
    return 0;
}


function sortTime(num1,num2) {
    return num2.lastLogin - num1.lastLogin;
}