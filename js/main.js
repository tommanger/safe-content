

function init(){
    renderPage();
}

function renderPage(){
    var userContent = getFromStorage('loggedinUser');
    document.querySelector('#name-curr-user').innerHTML = userContent.userName;
    if(userContent.isAdmin){
        document.querySelector('.admin-btn').style.display = 'block';
    }
}

function logOut(){
    window.location.href = "login.html"
    localStorage.removeItem("loggedinUser");
}

function goToAdmin(){
    window.location.href ="admin.html";
}