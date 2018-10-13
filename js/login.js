


function onLogIn(ev, elForm) {
    ev.preventDefault()
    var userName = elForm.elements.userName.value;
    var password = elForm.elements.password.value;
    var loggedinUser = checkUserLogin(userName, password)
    if (loggedinUser) {
        window.location.href = "main.html";
    }
    else {
        document.querySelector('.wrong').style.display = 'block';
        setTimeout(function () {
            document.querySelector('.wrong').style.display = 'none';

        }, 2000)

    }
}

