'use strict';
var choice = 'table';

function init() {
    choiceDisplay('table');
}

function choiceDisplay(elBtn) {
    var elRenderDisplay = document.querySelector('.render-display');
    var strHTML;
    if (elBtn === 'cards') {
        choice = 'cards'
        strHTML = renderUsersCards();
    } else {
        choice = 'table'
        strHTML = renderUsersTable();
    }
    elRenderDisplay.innerHTML = strHTML;
}

function renderUsersCards() {
    //TODO: make render to cards
    var users = getUsers();
    var strHTMLs = `<div class="container-fluid card-deck">`
    strHTMLs += users.map(function(user){
        return `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="img/1.jpg" alt="Card image cap">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Name: ${user.userName}</li>
                            <li class="list-group-item">Password: ${user.password}</li>
                            <li class="list-group-item">Last Login:<br> ${(user.lastLogin) ? getTimeStr(user.lastLogin) : 'not login'}</li>
                        </ul>
                    </div>
                </div>`
    })
    strHTMLs += `</div>`
    return strHTMLs;
}

function renderUsersTable() {
    // var table = document.querySelector('#user-table');
    var users = getUsers();

    var strHtmls = `<table class="table table-hover">
                        <thead>
                            <td>User Name</td>
                            <td>Password</td>
                            <td>Is Admin?</td>
                            <td>last Login</td>
                        </thead>
                        <tbody id="user-table">`
    strHtmls += users.map(function (user) {
        return `<tr>
                    <td>${user.userName}</td>
                    <td>${user.password}</td>
                    <td>${user.isAdmin ? 'Admin' : 'Not Admin'}</td>
                    <td>${(user.lastLogin) ? getTimeStr(user.lastLogin) : 'not login'}</td>

                </tr>`
    })
    strHtmls += `</tbody></table>`
    return strHtmls;
}

function onSetSort(statusSort) {
    setSort(statusSort);
    choiceDisplay(choice);
}