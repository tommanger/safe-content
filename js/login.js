


function onLogIn(ev, elForm) {
    ev.preventDefault()
    var userName = elForm.elements.userName.value;
    var password = elForm.elements.password.value;
    var loggedinUser = checkUserLogin(userName, password)
    if (loggedinUser) {
        window.location.href = "file:///C:/Users/%D7%AA%D7%95%D7%9D%20%D7%9E%D7%A0%D7%92%D7%A8/Dropbox/CaSep18-ExcerciseSubmission/Tom%20Manger/day%2018/safe-content/main.html";
    }
    else {
        document.querySelector('.wrong').style.display = 'block';
        setTimeout(function () {
            document.querySelector('.wrong').style.display = 'none';

        }, 2000)

    }
}

