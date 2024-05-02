// Globala konstanter och variabler

// --------------------------------------------------
// Initiera globala variabler och händelsehanterare
function init() {
    const formLogin = document.getElementById('log_in');
    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();

        // taget härifrån: https://www.javascripttutorial.net/web-apis/javascript-formdata/
        const formData = new FormData(formLogin);
        const valuesLogin = [...formData.entries()];
        console.log(valuesLogin);
        logIn(valuesLogin);
    });
    let user = sessionStorage.getItem("user");
    if (user != "" && user != null) {
        console.log(user);
        document.getElementsByClassName('login_create')[0].innerHTML = `Du är inloggad som: ${user}<br> <a href="create_acc.html">Skapa nytt konto</a>`;
    } else {
        document.getElementsByClassName('login_create')[0].innerHTML = `Har inget konto? <a href="create_acc.html">Skapa konto</a>`;
        console.log("finns inte");
    }
} // Slut init
window.addEventListener('load', init);
// --------------------------------------------------

async function logIn(userDetails) {
    console.log("formulär skickat");
    if (userDetails[0][1] != "" && userDetails[1][1]) {
        loginDetails = {
            "accountUserName": userDetails[0][1],
            "password": userDetails[1][1]
        }
        document.getElementById('login_msg').innerHTML = "";
        const response = await fetch(`http://127.0.0.1:3000/users/login`, {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(loginDetails)
        });
        const res = await response.json();
        console.log(res)
        sessionStorage.setItem("user", res.user[0].accountUserName)
        localStorage.setItem("token", res.token)
        console.log(sessionStorage.getItem("user"));
        console.log(localStorage.getItem("token"));
        document.location.href = "http://localhost:1234/index.html";
    } else {
        document.getElementById('login_msg').innerHTML = "Var snäll och fyll i alla fält";
    }

}