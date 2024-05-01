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
        sessionStorage.setItem("user", res[0].accountUserName)
        console.log(sessionStorage.getItem("user"));
    } else {
        document.getElementById('login_msg').innerHTML = "Var snäll och fyll i alla fält";
    }

}